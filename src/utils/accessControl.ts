import type { FeatureKey, Role, SubscriptionTier } from '../types';
import { FEATURE_ACCESS_RULES } from '../data/mockData';

interface AccessCheckParams {
  feature: FeatureKey;
  role: Role;
  tier: SubscriptionTier;
}

const TIER_LEVELS: Record<SubscriptionTier, number> = {
  'Tier 1': 1,
  'Tier 2': 2,
};

export function checkFeatureAccess({ feature, role, tier }: AccessCheckParams): boolean {
  const rule = FEATURE_ACCESS_RULES.find((r) => r.feature === feature);
  if (!rule) return false;

  const hasRole = rule.allowedRoles.includes(role);
  const hasTier = TIER_LEVELS[tier] >= TIER_LEVELS[rule.requiredTier];

  return hasRole && hasTier;
}
