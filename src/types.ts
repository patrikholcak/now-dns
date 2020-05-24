export interface Domain {
  boughtAt: number | null;
  cdnEnabled: boolean;
  createdAt: number;
  expiresAt: number | null;
  id: string;
  name: string;
  nsVerifiedAt: number | null;
  serviceType: string;
  transferredAt: number | null;
  transferStartedAt: number | null;
  txtVerifiedAt: number | null;
  verificationRecord: string | null;
  verified: boolean;
  nameservers: string[];
  intendedNameservers: string[];
  creator: {
    customerId: string;
    email: string;
    id: string;
    username: string;
  };
}

export interface DNSRecord {
  id?: string;
  slug: string;
  type: string;
  name: string;
  value: string;
  creator: string;
  created: number;
  updated?: number;
}
