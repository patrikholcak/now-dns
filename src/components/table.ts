import { htm } from "@zeit/integration-utils";

const cellStyles = {
  display: "table-cell",
  padding: "0 10px",
  height: "50px",
  fontSize: "14px",
  color: "#444",
  verticalAlign: "middle",
  borderWidth: "0 0 1px",
  borderStyle: "solid",
  borderColor: "#eaeaea"
};

interface TableHeaderProps {
  column: string;
  isFirst: boolean;
  isLast: boolean;
}

const TableHeader = ({ column, isFirst, isLast }: TableHeaderProps) => {
  let headerStyles: Object = {
    ...cellStyles,
    height: "40px",
    fontSize: "12px",
    // background: "#fafafa",
    background: "#fff",
    borderWidth: "1px 0",
    color: "#666",
    textTransform: "uppercase"
  };

  if (isFirst) {
    headerStyles = {
      ...headerStyles,
      borderLeftWidth: "1px",
      borderTopLeftRadius: "4px",
      borderBottomLeftRadius: "4px",
    };
  }

  if (isLast) {
    headerStyles = {
      ...headerStyles,
      borderRightWidth: "1px",
      borderTopRightRadius: "4px",
      borderBottomRightRadius: "4px",
    };
  }

  return htm`
    <Box ...${headerStyles}>${column}</Box>
  `;
};

interface TableCellProps {
  children: any;
  [key: string]: any;
}

export const TableCell = ({ children, ...styles }: TableCellProps) => htm`
  <Box ...${cellStyles} ...${styles}>${children}</Box>
`;

interface TableRowProps {
  children: any;
}

export const TableRow = ({ children }: TableRowProps) => htm`
  <Box display="table-row">${children}</Box>
`;

const defaultRenderer = (item: Record<string, any>) => htm`
  ${Object.values(item).map(
    value => htm`<${TableCell}>${value}</${TableCell}>`
  )}
`;

interface TableProps<RowItem> {
  columns?: string[];
  rows: RowItem[];
  children: [(row: RowItem, index: number, array: RowItem[]) => string];
}

const Table = <RowItem>({
  columns,
  rows,
  children: [renderer = defaultRenderer]
}: TableProps<RowItem>) => htm`
  <Box displ<ay="table" width="100%">
    <${TableRow}>
      ${(columns &&
        columns.map(
          (column, index) => htm`
          <${TableHeader}
            column=${column}
            isFirst=${index === 0}
            isLast=${index === columns.length - 1}
          />
        `
        )) ||
        ""}
    </${TableRow}>

    ${rows.map(
      (...args) => htm`
      <${TableRow}>
        ${renderer(...args)}
      </${TableRow}>
    `
    )}
  </Box>
`;

export default Table;
