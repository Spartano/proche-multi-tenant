import { useSession } from './useSession';
import { checkFeatureAccess } from '../utils/accessControl';
import type { FeatureKey } from '../types';

export function useAuthorization() {
  const { session } = useSession();

  const hasAccess = (feature: FeatureKey): boolean => {
    if (!session) return false;
    return checkFeatureAccess({
      feature,
      role: session.user.role,
      tier: session.tier,
    });
  };

  return {
    hasAccess,
    isReady: session !== null,
    role: session?.user.role || null,
    tier: session?.tier || null,
  };
}
