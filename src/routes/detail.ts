import { htm, UiHookPayload } from "@zeit/integration-utils";
import _ from "lodash";

import RecordGroup from "../components/record-group";

import { Domain, DNSRecord } from "../types";
import { ApiType } from "../api";
import { SUPPORTED_RECORD_TYPES, RecordType } from "../constants";

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
    .map((row) => ({
      ...row,
      name: row.name.replace("@", ""),
      value: row.value.join(" "),
    }))
    .filter((row) => row.value.trim().length && row.value !== " issue ");
};

const createRecords = async (
  domain: Domain,
  api: ApiType,
  clientState: Record<string, string>
): Promise<DNSRecord[]> => {
  const transformedPayload = transform(clientState);

  const responses = await Promise.all(
    transformedPayload.map(async (record) => {
      const res = await api.createRecord(domain.name, record);

      return res;
    })
  );

  return transformedPayload
    .map((record, index) => {
      const definition = SUPPORTED_RECORD_TYPES.find(
        (recordType) => recordType.type === record.type
      ) as RecordType;

      return {
        ...record,
        id: responses[index].uid,
        ...(definition.parseValue ? definition.parseValue(record.value) : {}),
        created: +new Date(),
      };
    })
    .filter((record) => record.id);
};

const getActiveDomain = (domains: Domain[], action: string): Domain =>
  domains.find((domain) => action.includes(domain.id)) || domains[0];

const DomainDetail = async (
  { domains }: RouteProps,
  payload: UiHookPayload,
  api: ApiType
) => {
  const domain = getActiveDomain(domains, payload.action);
  const { records } = await api.getDomainDNS(domain.name);

  let newRecords: DNSRecord[] = [];
  let filteredRecords = records;

  const [, route = ""] = payload.action.split("#");
  const [, recordToRemove] = route.split(":");

  try {
    if (route.startsWith("remove")) {
      await api.removeRecord(domain.name, recordToRemove);
      filteredRecords = filteredRecords.filter((r) => r.id !== recordToRemove);
    } else if (route.startsWith("save")) {
      newRecords = await createRecords(domain, api, payload.clientState);
    }
  } catch (error) {
    return htm`
    <Box>
      <H1>Encountered an error ${
        route.startsWith("remove") ? "removing" : "creating"
      } the record</H1>
      <P>${error.message}</p>
      <Link action=${domain.id}}>← Try again</Link>
    </Box>
    `;
  }

  const recordGroups = _.groupBy(
    [...newRecords, ...filteredRecords],
    (record) => record.type
  );

  return htm`
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <H1>Edit records for: ${domain.name}</H1>
      <Link action="view">← Select a domain</Link>
    </Box>

    ${SUPPORTED_RECORD_TYPES.map((definition) => {
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
      borderTop: "1px solid #eaeaea",
    }}>
      <Button action=${domain.id + "#save"}>Save Changes</Button>
    </Box>
  `;
};

export default DomainDetail;
