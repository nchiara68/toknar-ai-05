// src/App.tsx
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { Authenticator, ThemeProvider } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './amplify/AmplifyConfigure';

import Home from './pages/Home';
import ProtectedRoute from './components/ProtectedRoute';
import LayoutWrapper from './components/LayoutWrapper';
import customTheme from './theme/customTheme';

export default function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <BrowserRouter>
        <LayoutWrapper>
          <Routes>
            <Route
              path="/"
              element={
                <Authenticator>
                  {({ user }) => <Navigate to="/home" replace />}
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
