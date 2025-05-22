// src/components/LayoutWrapper.tsx
//import { useLocation } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}

export default function LayoutWrapper({ children }: Props) {
//const location = useLocation();
//const isAuthPage = location.pathname === '/';

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        width: '100vw',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#002b4b',
      }}
    >
      {children}
    </div>
  );
}
