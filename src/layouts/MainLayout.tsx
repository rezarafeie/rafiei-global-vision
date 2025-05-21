
import React from 'react';
import { Outlet } from 'react-router-dom';
import Layout from '@/components/Layout';

/**
 * MainLayout component serves as the primary layout for public pages
 * It uses the common Layout component and provides an outlet for route content
 */
const MainLayout = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default MainLayout;
