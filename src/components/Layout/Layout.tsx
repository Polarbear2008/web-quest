import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ClimateBackground from '../../components/UI/ClimateBackground';

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <ClimateBackground />
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 py-8">
        <div className="relative z-10">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;