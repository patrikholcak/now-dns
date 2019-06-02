import { htm } from "@zeit/integration-utils";
import { distanceInWordsStrict } from 'date-fns'

import Table, { TableCell } from "../components/table";
import Icon from "../components/icon";
import Small from "../components/small";

import { DNSRecord } from "../types";
import { RecordType } from "../constants";

interface RecordGroupProps {
  definition: RecordType;
  records: DNSRecord[];
  parentAction: string;
}

const createEntry = (definition: RecordType): Object => {
  return definition.columns.reduce((prev, { key, type, values }) => {
    return {
      ...prev,
      value: '',
      [key]: type === "select" && values ? values[0] : ""
    };
  }, {});
};

const timeAgo = (value?: string) =>
  value
   ? htm`<${Small}>${distanceInWordsStrict(new Date(value), new Date())} ago</${Small}>`
   : '—'


const RecordGroup = ({ definition, records, parentAction }: RecordGroupProps) => {
  records = [
    ...(records || []),
    createEntry(definition) as DNSRecord
  ];

  const columns = [
    'Name',
    ...definition.columns.map(column => column.label),
    'Created',
    'Updated',
    'Action'
  ];

  return htm`
    <Fieldset>
      <FsContent>
        <H2>${definition.type}</H2>
        <P>${definition.description}</P>
      </FsContent>
      <FsFooter>
        <${Table} columns=${columns} rows=${records}>
          ${(record: Record<string, any>) => {
            return htm`
              <${TableCell}>
                ${record.id
                  ? record.name
                  : htm`
                      <Input
                        name=${definition.type + ".name"}
                        value=${record.name || ''}
                        width="100%"
                      />`
                }
              </${TableCell}>

              ${definition.columns.map((column, index) => {
                const value = record[column.key];
                const name = definition.type + "." + column.key + "." + index
                let children = record && column.getValue ? column.getValue(record) : value;

                if (!record.id) {
                  switch (column.type) {
                    case "input":
                      children = htm`
                        <Input
                          name=${name}
                          value=${value}
                          width="100%"
                        />
                      `;
                      break;

                    case "select":
                      children = htm`
                        <Select name=${name} value=${value}>
                          ${(column.values as Array<string>).map(opt => htm`
                            <Option value=${opt} caption=${opt} />
                          `)}
                        </Select>
                      `;
                  }
                }

                return htm`
                  <${TableCell} ...${column.columnProps}>
                    ${children}
                  </${TableCell}>
                `;
              })}

              <${TableCell}>
                ${timeAgo(record.created)}
              </${TableCell}>

              <${TableCell}>
                ${timeAgo(record.updated)}
              </${TableCell}>

              <${TableCell} width="50px" textAlign="center">
                ${record.id
                  ? htm`
                      <Link action=${parentAction + "#remove:" + record.id}>
                        <${Icon} icon="cross" fill="#eb5757" />
                      </Link>
                    `
                  : ''
                }
              </${TableCell}>
            `;
          }}
        </${Table}>
      </FsFooter>
    </Fieldset>
  `;
};

export default RecordGroup;
