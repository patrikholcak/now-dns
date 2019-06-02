import { htm } from "@zeit/integration-utils";

interface SmallProps {
  children: any;
}

const Small = ({ children }: SmallProps) => htm`
  <Box fontSize="12px">${children}</Box>
`;

export default Small;
