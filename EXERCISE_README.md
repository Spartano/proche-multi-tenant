# Frontend Exercise: Multi-Tenant White-Labeled SaaS Dashboard

## Time Limit: 1 Hour

## Overview

You have a React + TypeScript SPA that simulates a multi-tenant white-labeled SaaS product. The scaffolding is complete -- types, mock data, page components, routing, and a design system (Porsche Design System + Tailwind) are all wired up.

Your job is to implement the **core architectural logic**: white-label branding, role-based access control (RBAC), and subscription-tier feature gating.

Right now the app compiles and runs, but:
- The header shows static text instead of the tenant logo
- The favicon and document title never change when switching tenants
- Every navigation item is visible regardless of role or tier
- Every route is accessible to every user (no guarding)

## Getting Started

```bash
npm install
npm run dev
```

Open the app and use the **Session Simulator** bar at the top to switch between tenants, user roles, and subscription tiers. Currently nothing changes because the logic is stubbed out.

## What's Already Provided

| Layer | Files | What it does |
|-------|-------|--------------|
| Types | `src/types/index.ts` | All TypeScript types (`Role`, `SubscriptionTier`, `FeatureKey`, `TenantConfig`, `User`, etc.) |
| Mock data | `src/data/mockData.ts` | 2 tenants, 6 users, feature access rules, navigation items, mock async APIs |
| Session state | `src/context/SessionContext.tsx`, `src/hooks/useSession.ts` | React Context managing current tenant, user, and tier -- fully working |
| Session selector | `src/components/SessionSelector.tsx` | Dropdown controls to switch tenant/user/tier -- fully working |
| Page components | `src/pages/*.tsx` | Dashboard, Cases, Reports, Rules, AdminSettings, AuditLogs, AccessDenied -- fully working |
| Layout | `src/components/PageLayout.tsx` | Reusable page wrapper -- fully working |
| Design system | Porsche Design System + Tailwind CSS | Already configured in `vite.config.ts`, `main.tsx`, `index.css` |

## Access Control Matrix

A feature is accessible only when **both** the role and tier conditions pass:

| Feature | Allowed Roles | Minimum Tier |
|---------|---------------|--------------|
| Dashboard | Admin, Analyst, Viewer | Tier 1 |
| Cases | Admin, Analyst, Viewer | Tier 1 |
| Reports | Admin, Analyst | Tier 2 |
| Rules | Admin, Analyst | Tier 2 |
| Admin Settings | Admin | Tier 1 |
| Audit Logs | Admin | Tier 2 |

This matrix is already defined as `FEATURE_ACCESS_RULES` in `src/data/mockData.ts`.

## Tasks

Work through these in order. Each builds on the previous one.

### Task 1: Tier Comparison Helper (~5 min)
**File:** `src/utils/accessControl.ts`

Complete the `TIER_LEVELS` map and the `meetsRequiredTier(userTier, requiredTier)` function. Both are already stubbed. `TIER_LEVELS` should map each `SubscriptionTier` to a numeric level (e.g. `'Tier 1': 1`, `'Tier 2': 2`). `meetsRequiredTier` should compare these levels and return `true` when the user's tier is >= the required tier.

This helper is used by Task 2.

### Task 2: Access Control Logic (~10 min)
**File:** `src/utils/accessControl.ts`

Implement `checkFeatureAccess({ feature, role, tier })` that returns `true` only when:
1. The user's role is in the feature's `allowedRoles`
2. `meetsRequiredTier(tier, rule.requiredTier)` returns `true`

Import `FEATURE_ACCESS_RULES` from `../data/mockData` and look up the rule for the given feature. If no rule is found, deny access.

### Task 3: Branding Hook (~5 min)
**File:** `src/hooks/useBranding.ts`

Add the necessary imports (`useEffect` from React, `updateFavicon` / `updateDocumentTitle` from `../utils/branding` -- both are already implemented) and a `useEffect` that calls both utilities whenever the session's tenant changes. The return shape is already in place.

### Task 4: Authorization Hook (~5 min)
**File:** `src/hooks/useAuthorization.ts`

Replace the placeholder `return true` in `hasAccess()` with a real call to `checkFeatureAccess()` using the current session's role and tier.

### Task 5: Component Wiring (~15 min)
Three components need your logic:

**`src/components/Header.tsx`** -- The `useBranding()` hook is already imported and called. Replace the static "Product Name" text with a dynamic `<img>` element using `logoUrl` and `productName`.

**`src/components/Navigation.tsx`** -- Use `useAuthorization()` to filter `NAVIGATION_ITEMS` so only accessible features appear in the sidebar.

**`src/components/ProtectedRoute.tsx`** -- Import `useAuthorization` and React Router's `<Navigate>`, then use them to check access. If denied, redirect to `/access-denied`.

### Task 6: Route Guarding (~10 min)
**File:** `src/App.tsx`

Wrap each page route with `<ProtectedRoute feature="...">` so that navigating directly to a URL the user can't access redirects them to the Access Denied page. The feature keys are listed in the TODO comment.

### Remaining Time: Review & Polish (~10 min)
- Test all combinations: switch tenants, roles, and tiers
- Verify favicon and title update on tenant change
- Verify nav items hide/show correctly
- Verify direct URL access to a restricted route shows Access Denied
- Review your code for clarity, type safety, and edge cases

## Verification Checklist

Use the session simulator to test these scenarios:

1. **Tenant switching**: Select "TechFlow Insights" -- the header logo, favicon, and page title should all change
2. **Viewer + Tier 1**: Only Dashboard and Cases visible in nav; direct URL to `/reports` shows Access Denied
3. **Analyst + Tier 1**: Dashboard and Cases visible; Reports and Rules blocked by tier
4. **Analyst + Tier 2**: Dashboard, Cases, Reports, and Rules visible; Admin Settings still hidden
5. **Admin + Tier 2**: All navigation items visible, all routes accessible
6. **Admin + Tier 1**: Dashboard, Cases, and Admin Settings visible; Reports, Rules, Audit Logs blocked by tier

## Evaluation Criteria

We are looking for:

- **Correctness** -- Does the access control work as specified? Does branding swap properly?
- **Code quality** -- Clean, readable TypeScript; no unnecessary complexity
- **Separation of concerns** -- Pure utility functions vs. hooks vs. components
- **Reusability** -- Access checking logic defined once, used everywhere
- **Edge cases** -- What happens with no session? Unknown features? Direct URL access?

## Bonus (if time permits)

- Apply the tenant's `primaryColor` as a CSS custom property so accent colors change per tenant
- Add a loading state while the session initializes
- Make the `checkFeatureAccess` function independently testable (it already should be if implemented as a pure function)

## Folder Structure Reference

```
src/
├── components/
│   ├── Header.tsx            ← TODO: dynamic logo
│   ├── Navigation.tsx        ← TODO: filter by access
│   ├── PageLayout.tsx        (provided)
│   ├── ProtectedRoute.tsx    ← TODO: route guard
│   └── SessionSelector.tsx   (provided)
├── context/
│   └── SessionContext.tsx     (provided)
├── data/
│   └── mockData.ts            (provided)
├── hooks/
│   ├── useAuthorization.ts   ← TODO: wire access check
│   ├── useBranding.ts        ← TODO: wire branding effects
│   └── useSession.ts          (provided)
├── pages/                     (all provided)
├── types/
│   └── index.ts               (provided)
├── utils/
│   ├── accessControl.ts      ← TODO: tier helper + access logic
│   └── branding.ts            (provided)
├── App.tsx                    ← TODO: add route guards
└── main.tsx                   (provided)
```
