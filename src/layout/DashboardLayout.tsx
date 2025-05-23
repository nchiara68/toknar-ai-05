// src/layout/DashboardLayout.tsx
import React from 'react';
import {
  View,
  Flex,
  Text,
  Divider,
  useTheme,
} from '@aws-amplify/ui-react';
import { NavLink, Outlet } from 'react-router-dom';

interface SidebarLinkProps {
  to: string;
  label: string;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ to, label }) => {
  return (
    <NavLink to={to} style={{ textDecoration: 'none' }}>
      {({ isActive }) => (
        <Text
          style={{
            padding: '0.75rem 1rem',
            borderRadius: '6px',
            backgroundColor: isActive ? '#32b2e7' : 'transparent',
            color: isActive ? '#ffffff' : '#333',
            fontWeight: isActive ? 'bold' : 'normal',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = isActive
              ? '#32b2e7'
              : '#e6f2ff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = isActive
              ? '#32b2e7'
              : 'transparent';
          }}
        >
          {label}
        </Text>
      )}
    </NavLink>
  );
};

const DashboardLayout: React.FC = () => {
  const { tokens } = useTheme();

  return (
    <Flex height="100vh">
      {/* Sidebar */}
      <View
        width="250px"
        padding={tokens.space.medium}
        backgroundColor={tokens.colors.background.secondary}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem',
          borderRight: `1px solid ${tokens.colors.border.primary.value}`,
        }}
      >
       <img
            src="/src/assets/TOKNAR-01-NAVY.png"
            alt="Toknar Logo"
            style={{
                width: '100%',
                maxWidth: '180px',
                marginBottom: '1rem',
                objectFit: 'contain',
            }}
        />


        {/* Section 1 */}
        <View>
          <Text fontWeight="bold" marginBottom="0.5rem">
            Section 1
          </Text>
          <SidebarLink to="/section1/sub1" label="Sub 1" />
          <SidebarLink to="/section1/sub2" label="Sub 2" />
        </View>
        <Divider />

        {/* Section 2 */}
        <View>
          <Text fontWeight="bold" marginBottom="0.5rem">
            Section 2
          </Text>
          <SidebarLink to="/section2/sub1" label="Sub 1" />
          <SidebarLink to="/section2/sub2" label="Sub 2" />
        </View>
        <Divider />

        {/* Section 3 */}
        <View>
          <Text fontWeight="bold" marginBottom="0.5rem">
            Section 3
          </Text>
          <SidebarLink to="/section3/sub1" label="Sub 1" />
          <SidebarLink to="/section3/sub2" label="Sub 2" />
        </View>
      </View>

      {/* Main content area */}
      <Flex direction="column" flex="1">
        {/* Top navbar */}
        <Flex
          padding={tokens.space.medium}
          backgroundColor="#32b2e7"
          justifyContent="space-between"
          alignItems="center"
          style={{
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            position: 'sticky',
            top: '0',
            zIndex: 10,
          }}
        >
          <Text fontSize="1.25rem" fontWeight="bold" color="white">
            
          </Text>
          <Flex gap={tokens.space.medium}>
  <SidebarLink to="/nav1" label="Nav 1" />
  <SidebarLink to="/nav2" label="Nav 2" />
  <SidebarLink to="/nav3" label="Nav 3" />
  <SidebarLink to="/signout" label="Sign Out" /> {/* ✅ New */}
</Flex>

        </Flex>

        {/* Routed content area */}
        <View
          padding={tokens.space.large}
          backgroundColor="#ffffff"
          style={{
            color: 'black',
            flex: 1,
            overflow: 'auto',
            borderTop: `1px solid ${tokens.colors.border.primary.value}`,
          }}
        >
          <Outlet />
        </View>
      </Flex>
    </Flex>
  );
};

export default DashboardLayout;
