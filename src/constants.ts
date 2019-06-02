import { DNSRecord } from "./types";

export interface RecordType {
  type: string;
  description: string;
  columns: Array<{
    label: string;
    key: string;
    type: "text" | "input" | "select";
    values?: string[];
    getValue?: Function;
    columnProps?: Object;
  }>;
}

export const SUPPORTED_RECORD_TYPES: RecordType[] = [
  {
    type: "A",
    description:
      "Adress record. An IPv4 of a server which the domain points to.",
    columns: [
      {
        label: "Value",
        key: "value",
        type: "input"
      }
    ]
  },
  {
    type: "AAAA",
    description:
      "Adress record. An IPv6 of a server which the domain points to.",
    columns: [
      {
        label: "Value",
        key: "value",
        type: "input"
      }
    ]
  },
  {
    type: "ALIAS",
    description:
      "A virtual record pointing to a hostname resolved to an A record on server side.",
    columns: [
      {
        label: "Value",
        key: "value",
        type: "input"
      }
    ]
  },
  {
    type: "CNAME",
    description:
      "Canonical name record. Serves as an alias for an existing domain.",
    columns: [
      {
        label: "Value",
        key: "value",
        type: "input"
      }
    ]
  },
  {
    type: "TXT",
    description: "A text record containing an arbitrary text.",
    columns: [
      {
        label: "Value",
        key: "value",
        type: "input"
      }
    ]
  },
  {
    type: "CAA",
    description:
      "DNS Certification Authority Authorization, constraining acceptable CAs for the domain.",
    columns: [
      {
        label: "Flags",
        key: "flags",
        type: "input",
        columnProps: { width: "50px" },
        getValue: (record: DNSRecord) => record.value.split(" ")[0]
      },
      {
        label: "Tag",
        key: "tag",
        type: "select",
        columnProps: { width: "110px" },
        values: ["issue", "issuewild", "iodef"],
        getValue: (record: DNSRecord) => record.value.split(" ")[1]
      },
      {
        label: "Value",
        key: "value",
        type: "input",
        getValue: (record: DNSRecord) => record.value.split(" ")[2]
      }
    ]
  },
  {
    type: "MX",
    description:
      "Maps a domain name to a list of message transfer agents for that domain.",
    columns: [
      {
        label: "Priority",
        key: "mxPriority",
        type: "input",
        columnProps: { width: "50px" }
      },
      {
        label: "Value",
        key: "value",
        type: "input"
      }
    ]
  },
  {
    type: "SRV",
    description:
      "Generalized service location record, used for newer protocols instead of creating protocol-specific records such as MX.",
    columns: [
      {
        label: "Priority",
        key: "priority",
        type: "input",
        columnProps: { width: "50px" }
      },
      {
        label: "Weight",
        key: "weight",
        type: "input",
        columnProps: { width: "50px" },
        getValue: (record: DNSRecord) => record.value.split(" ")[0]
      },
      {
        label: "Port",
        key: "port",
        type: "input",
        columnProps: { width: "90px" },
        getValue: (record: DNSRecord) => record.value.split(" ")[1]
      },
      {
        label: "Target",
        key: "target",
        type: "input",
        getValue: (record: DNSRecord) => record.value.split(" ")[2]
      }
    ]
  }
];
