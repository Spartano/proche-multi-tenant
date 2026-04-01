import type { ReactNode } from 'react';
import type { FeatureKey } from '../types';

interface ProtectedRouteProps {
  feature: FeatureKey;
  children: ReactNode;
}

export function ProtectedRoute({ feature, children }: ProtectedRouteProps) {
  // TODO: Import useAuthorization from '../hooks/useAuthorization' and
  // Navigate from 'react-router-dom'. Check if the current user has access
  // to the given feature. If not, redirect to /access-denied using <Navigate>.
  void feature;
  return <>{children}</>;
}
