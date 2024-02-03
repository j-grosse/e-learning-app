import React, { ReactNode } from 'react';
import DashboardMain from './DashboardMain';
import DashboardSidebar from './components/DashboardSidebar';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    // dashboard sidebar remains fixed on the side
    <div className="flex flex-row w-full min-h-screen h-auto bg-secondary-500">
      <DashboardSidebar />

      <DashboardMain >
        DashboardNavbar {/* <DashboardNavbar /> */}
        {children}
      </DashboardMain>
      
    </div>
  );
};

export default DashboardLayout;
