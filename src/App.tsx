// src/App.tsx
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { Authenticator, ThemeProvider } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './amplify/AmplifyConfigure';

import Home from './pages/Home';
import ProtectedRoute from './components/ProtectedRoute';
import LayoutWrapper from './components/LayoutWrapper';
import customTheme from './theme/customTheme';
import tokLogo from './assets/TOKNAR-02-WHITE.png';

export default function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <BrowserRouter>
        <LayoutWrapper>
          <Routes>
            <Route
              path="/"
              element={
                <Authenticator
                  components={{
                    Header: () => (
                      <div style={{ textAlign: 'center', padding: '1.5rem' }}>
                        <img
                          src={tokLogo} // Ensure this is placed in your `public/assets/` folder
                          alt="Toknar Logo"
                          style={{ maxWidth: '300px', height: 'auto' }}
                        />
                      </div>
                    ),
                  }}
                >
                  {() => <Navigate to="/home" replace />}
                </Authenticator>
              }
            />
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
          </Routes>
        </LayoutWrapper>
      </BrowserRouter>
    </ThemeProvider>
  );
}
