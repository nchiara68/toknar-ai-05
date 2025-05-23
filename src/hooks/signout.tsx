// src/hooks/signout.tsx
import { useAuthenticator } from '@aws-amplify/ui-react';

export const useSignOut = () => {
  const { signOut } = useAuthenticator();

  const handleSignOut = () => {
    signOut();
  };

  return { handleSignOut };
};
