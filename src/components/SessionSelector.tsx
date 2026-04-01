import { PSelect, PSelectOption, PText } from '@porsche-design-system/components-react';
import { useSession } from '../hooks/useSession';
import { TENANTS, MOCK_USERS } from '../data/mockData';
import { ExerciseInfo } from './ExerciseInfo';
import type { SubscriptionTier } from '../types';

export function SessionSelector() {
  const { session, setTenant, setUser, setTier } = useSession();

  if (!session) return null;

  const currentTenantUsers = MOCK_USERS[session.tenant.tenantId];

  return (
    <div className="bg-surface border-b-2 border-contrast-low">
      <div className="p-fluid-md pb-0">
        <ExerciseInfo title="Session Simulator — Interviewer Controls">
          <p>
            These controls simulate switching between tenants, users, and subscription tiers
            <strong> without a real backend</strong>. Changing the <strong>Tenant</strong> swaps
            branding (logo, favicon, page title). Changing the <strong>User Role</strong> and{' '}
            <strong>Tier</strong> affects which navigation items appear and which routes are accessible.
            This is the core of the exercise: the candidate must wire up these reactive state changes.
          </p>
        </ExerciseInfo>
      </div>

      <div className="flex flex-wrap items-end gap-fluid-md p-fluid-md">
        <div className="flex-1 min-w-[200px]">
          <PText size="small" className="text-contrast-medium mb-static-xs">
            Simulate Session
          </PText>
          <PSelect
            name="tenant"
            label="Tenant"
            value={session.tenant.tenantId}
            onChange={(e) => setTenant(e.detail.value)}
          >
            {TENANTS.map((tenant) => (
              <PSelectOption key={tenant.tenantId} value={tenant.tenantId}>
                {tenant.productName}
              </PSelectOption>
            ))}
          </PSelect>
        </div>

        <div className="flex-1 min-w-[200px]">
          <PSelect
            name="user"
            label="User Role"
            value={session.user.id}
            onChange={(e) => setUser(e.detail.value)}
          >
            {currentTenantUsers.map((user) => (
              <PSelectOption key={user.id} value={user.id}>
                {user.name} ({user.role})
              </PSelectOption>
            ))}
          </PSelect>
        </div>

        <div className="flex-1 min-w-[200px]">
          <PSelect
            name="tier"
            label="Subscription Tier"
            value={session.tier}
            onChange={(e) => setTier(e.detail.value as SubscriptionTier)}
          >
            <PSelectOption value="Tier 1">Tier 1</PSelectOption>
            <PSelectOption value="Tier 2">Tier 2</PSelectOption>
          </PSelect>
        </div>
      </div>
    </div>
  );
}
