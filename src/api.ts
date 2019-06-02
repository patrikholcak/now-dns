import { ZeitClient, FetchOptions } from "@zeit/integration-utils";
import request from "request-promise-native";

import { Domain, DNSRecord } from "./types";

export type ApiType = ReturnType<typeof useApi>;

const useApi = (client: ZeitClient) => {
  const zeitApiRequest = (url: string, options: FetchOptions = {}) =>
    client.fetchAndThrow(url, options);

  const nativeRequest = (url: string, options?: request.RequestPromiseOptions) =>
    request(`https://api.zeit.co${url}`, {
      auth: { bearer: client.options.token },
      ...options
    });

  return {
    getAllDomains: (): Promise<{ domains: Domain[] }> =>
      zeitApiRequest("/v4/domains"),

    getDomainDNS: (domain: string): Promise<{ records: DNSRecord[] }> =>
      zeitApiRequest(`/v2/domains/${domain}/records`),

    removeRecord: (domain: string, record: string) =>
      nativeRequest(`/v2/domains/${domain}/records/${record}`, {
        method: "DELETE"
      }),

    createRecord: (domain: string, json: Object) =>
      nativeRequest(`/v2/domains/${domain}/records`, {
        method: "POST",
        json
      })
  };
};

export default useApi;
