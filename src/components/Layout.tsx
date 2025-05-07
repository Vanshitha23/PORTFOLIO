// src/components/Layout.tsx
// import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom'; // For rendering the page content

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <div className="container">
        <Outlet /> {/* Renders the specific page content */}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
