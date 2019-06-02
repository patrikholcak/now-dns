import { htm } from "@zeit/integration-utils";
import { format } from 'date-fns'

import Table, { TableCell } from "../components/table";
import Image from "../components/image";
import Icon from '../components/icon';
import Small from '../components/small'

import { Domain } from "../types";

interface RouteProps {
  domains: Domain[];
}

const DomainList = ({ domains }: RouteProps) => {
  return htm`
    <H1>Select a domain</H1>

    <Box marginTop="40px">
      <${Table} columns=${["", "Domain", "DNS", "Expiration date", "Verified", "CDN", "Action"]} rows=${domains}>
        ${(domain: Domain) => htm`
          <${TableCell}>
            <${Image} src=${`http://${domain.name}/favicon.ico`} width="16" cover />
          </${TableCell}>

          <${TableCell}>
            <Link href=${`http://${domain.name}`} target="_blank">
              <Box fontWeight="500" color="#000">${domain.name}</Box>
            </Link>
          </${TableCell}>

          <${TableCell}>${domain.serviceType}</${TableCell}>

          <${TableCell}>
            ${domain.expiresAt
                ? format(new Date(domain.expiresAt), "MMM DD YYYY")
                : '—'
            }
          </${TableCell}>

          <${TableCell}>
            ${domain.verified
              ? htm`<${Icon} icon="checkmark-circle" />`
              : htm`<${Small}>NO</${Small}>`
            }
          </${TableCell}>

          <${TableCell}>
            ${domain.cdnEnabled
              ? htm`<${Icon} icon="checkmark-circle" />`
              : htm`<${Small}>NO</${Small}>`
            }
          </${TableCell}>

          <${TableCell} width="60px" textAlign="right">
            <Link action=${domain.id}>Select</Link>
          </${TableCell}>
        `}
      </${Table}>
    </Box>
  `;
};

export default DomainList
