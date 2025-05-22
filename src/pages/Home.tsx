// src/pages/Home.tsx
import { useAuthenticator } from '@aws-amplify/ui-react';

export default function Home() {
  const { user, signOut } = useAuthenticator();

  return (
    <main>
      <h1>Hello, {user?.username}</h1>
      <button onClick={signOut}>Sign Out</button>
    </main>
  );
}
