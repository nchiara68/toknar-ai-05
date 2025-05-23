import React from 'react';
import { View, Button, Text } from '@aws-amplify/ui-react';
import { useSignOut } from '../hooks/signout';

const SignOutPage: React.FC = () => {
  const { handleSignOut } = useSignOut();

  return (
    <View
      padding="2rem"
      height="100vh"
      backgroundColor="#f8f9fa"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        gap: '1.5rem',
      }}
    >
      <Text fontSize="1.25rem" fontWeight="bold">
        Are you sure to sign out?
      </Text>

      <Button variation="primary" onClick={handleSignOut}>
        Sign Out
      </Button>
    </View>
  );
};

export default SignOutPage;
