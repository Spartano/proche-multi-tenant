import type { FeatureKey, Role, SubscriptionTier } from '../types';

interface AccessCheckParams {
  feature: FeatureKey;
  role: Role;
  tier: SubscriptionTier;
}

// TODO (Task 1): Implement the TIER_LEVELS map and meetsRequiredTier helper.
// TIER_LEVELS should map each SubscriptionTier ('Tier 1', 'Tier 2') to a
// numeric level so tiers can be compared (e.g. Tier 2 >= Tier 1).
// meetsRequiredTier should return true when the user's tier level is >= the required tier level.

export const TIER_LEVELS: Record<SubscriptionTier, number> = {
  // TODO: Map each tier to a numeric level
  'Tier 1': 0,
  'Tier 2': 0,
};

export function meetsRequiredTier(userTier: SubscriptionTier, requiredTier: SubscriptionTier): boolean {
  // TODO: Compare the numeric tier levels and return true if userTier >= requiredTier
  void userTier; // remove once implemented
  void requiredTier; // remove once implemented
  return true;
}

export function checkFeatureAccess({ feature, role, tier }: AccessCheckParams): boolean {
  // TODO (Task 2): Implement access checking using FEATURE_ACCESS_RULES from '../data/mockData'.
  // A feature is accessible when BOTH conditions are true:
  //   1. The user's role is in the feature's allowedRoles
  //   2. meetsRequiredTier(tier, rule.requiredTier) returns true
  // If no rule is found for the feature, deny access.
  // remove these void statements once you use the parameters
  void feature;
  void role;
  void tier;
  return true;
}
