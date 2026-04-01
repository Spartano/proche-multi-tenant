import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthorization } from '../hooks/useAuthorization';
import type { FeatureKey } from '../types';

interface ProtectedRouteProps {
  feature: FeatureKey;
  children: ReactNode;
}

export function ProtectedRoute({ feature, children }: ProtectedRouteProps) {
  const { hasAccess, isReady } = useAuthorization();

  if (!isReady) return null;

  if (!hasAccess(feature)) {
    return <Navigate to="/access-denied" replace />;
  }

  return <>{children}</>;
}
