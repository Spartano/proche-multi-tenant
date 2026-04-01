import { useSession } from './useSession';

export function useBranding() {
  const { session } = useSession();

  // TODO: Import useEffect from 'react' and import updateFavicon / updateDocumentTitle
  // from '../utils/branding'. Then add a useEffect that calls both utilities
  // whenever the session (specifically the tenant) changes.

  return {
    tenant: session?.tenant || null,
    productName: session?.tenant.productName || '',
    logoUrl: session?.tenant.logoUrl || '',
    primaryColor: session?.tenant.primaryColor || '',
  };
}
