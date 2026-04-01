import { useSession } from './useSession';
import type { FeatureKey } from '../types';

export function useAuthorization() {
  const { session } = useSession();

  const hasAccess = (feature: FeatureKey): boolean => {
    // TODO: Import and use checkFeatureAccess from '../utils/accessControl'
    // to determine whether the current user's role and subscription tier
    // grant access to the given feature. Return false if there is no session.
    void feature; // remove once implemented
    return true;
  };

  return {
    hasAccess,
    role: session?.user.role || null,
    tier: session?.tier || null,
  };
}
