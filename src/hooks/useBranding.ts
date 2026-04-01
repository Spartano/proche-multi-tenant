import { useSession } from './useSession';

export function useBranding() {
  const { session } = useSession();

  // TODO (Task 3): Import useEffect from 'react' and import updateFavicon / updateDocumentTitle
  // from '../utils/branding' (both are already implemented).
  // Add a useEffect that calls both utilities whenever the session's tenant changes.

  return {
    tenant: session?.tenant || null,
    productName: session?.tenant.productName || '',
    logoUrl: session?.tenant.logoUrl || '',
    primaryColor: session?.tenant.primaryColor || '',
  };
}
