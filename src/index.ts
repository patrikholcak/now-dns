import { withUiHook, htm } from "@zeit/integration-utils";

import useApi from "./api";
import useRouter from "./components/router";

import DomainList from "./routes/domain-list";
import DomainDetail from "./routes/detail";

export default withUiHook(async req => {
  const api = useApi(req.zeitClient);
  const Route = useRouter(req.payload, api);

  const { domains } = await api.getAllDomains();
  const domainIds = domains.map(domain => domain.id);

  return htm`
    <Page>
      ${Route("view", DomainList, { domains })}
      ${await Route(domainIds, DomainDetail, { domains })}
    </Page>
  `;
});
