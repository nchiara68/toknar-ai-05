// src/components/ProtectedRoute.tsx
import { useAuthenticator } from '@aws-amplify/ui-react';
import { Navigate } from 'react-router-dom';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: Props) {
  const { authStatus } = useAuthenticator();

  if (authStatus !== 'authenticated') {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}

