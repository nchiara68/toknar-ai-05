// src/components/Auth1.tsx
import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import tokLogo from '../../assets/TOKNAR-01-NAVY.png';

export function Auth({ children }: { children: React.ReactNode }) {
  return (
    <Authenticator
      components={{
        Header: () => (
          <div style={{ textAlign: 'center', padding: '1.5rem' }}>
            <img
              src={tokLogo}
              alt="Toknar Logo"
              style={{ maxWidth: '300px', height: 'auto' }}
            />
          </div>
        ),
      }}
    >
      {children}
    </Authenticator>
  );
}
