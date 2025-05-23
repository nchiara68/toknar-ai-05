// src/App.tsx
//import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Text } from '@aws-amplify/ui-react';

import DashboardLayout from './layout/DashboardLayout';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import SignOutPage from './pages/SignOutPage';

import { Auth } from './components/Auth1';

const App = () => {
  return (
   <Auth>
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          {/* ✅ This handles the root URL "/" */}
          <Route index element={<Page1 />} />

          {/* Top nav */}
          <Route path="/nav1" element={<Page1 />} />
          <Route path="/nav2" element={<Page2 />} />
          <Route path="/nav3" element={<Page3 />} />
          <Route path="/signout" element={<SignOutPage />} />


          {/* Sidebar routes */}
          <Route path="/section1/sub1" element={<Page1 />} />
          <Route path="/section1/sub2" element={<Page2 />} />
          <Route path="/section2/sub1" element={<Page3 />} />
          <Route path="/section2/sub2" element={<Page1 />} />
          <Route path="/section3/sub1" element={<Page2 />} />
          <Route path="/section3/sub2" element={<Page3 />} />

          {/* Fallback route for unknown paths */}
          <Route path="*" element={<Text color="red">404 - Page Not Found</Text>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </Auth>
  );
};

export default App;
