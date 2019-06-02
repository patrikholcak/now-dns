import { htm, UiHookPayload } from "@zeit/integration-utils";
import _ from "lodash";

import RecordGroup from "../components/record-group";

import { Domain } from "../types";
import { ApiType } from "../api";
import { SUPPORTED_RECORD_TYPES } from "../constants";

interface RouteProps {
  domains: Domain[];
}

const transform = (source: Record<string, string>) => {
  let result: Record<string, any> = {};

  Object.entries(source).forEach(([key, value]) => {
    const [type, path, index] = key.split(".");

    if (!result[type]) result[type] = { type, value: [] };

    if (index) {
      result[type].value[index] = value;
    } else {
      result[type][path] = value;
    }
  });

  const flattened = Object.values(result);

  return flattened
    .map(row => ({ ...row, value: row.value.join(" ") }))
    .filter(row => row.value.trim().length && row.value !== " issue ");
};

const createRecords = async (
  domain: Domain,
  api: ApiType,
  clientState: Record<string, string>
) => {
  const transformedPayload = transform(clientState);

  await Promise.all(
    transformedPayload.map(async record => {
      await api.createRecord(domain.name, record);
    })
  );
};

const getActiveDomain = (domains: Domain[], action: string): Domain =>
  domains.find(domain => action.includes(domain.id)) || domains[0];

const DomainDetail = async (
  { domains }: RouteProps,
  payload: UiHookPayload,
  api: ApiType
) => {
  const domain = getActiveDomain(domains, payload.action);

  const [, route = ""] = payload.action.split("#");
  if (route.startsWith("remove")) {
    const [, recordToRemove] = route.split(":");

    await api.removeRecord(domain.name, recordToRemove);
  } else if (route.startsWith("save")) {
    await createRecords(domain, api, payload.clientState);
  }

  const { records } = await api.getDomainDNS(domain.name);
  const recordGroups = _.groupBy(records, record => record.type);

  return htm`
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <H1>Edit records for: ${domain.name}</H1>
      <Link action="view">← Select a domain</Link>
    </Box>

    ${SUPPORTED_RECORD_TYPES.map(definition => {
      return htm`
        <${RecordGroup}
          definition=${definition}
          records=${recordGroups[definition.type]}
          parentAction=${domain.id}
        />
      `;
    })}

    <Box ...${{
      position: "sticky",
      display: "flex",
      justifyContent: "flex-end",
      bottom: "0",
      background: "#fafafa",
      padding: "20px 0",
      borderTop: "1px solid #eaeaea"
    }}>
      <Button action=${domain.id + "#save"}>Save Changes</Button>
    </Box>
  `;
};

export default DomainDetail;
