import React, { ReactNode } from 'react';

interface DashboardMainProps {
  children: ReactNode;
}
const DashboardMain = ({ children }: DashboardMainProps) => {
  return (
    <div className="flex max-h-screen overflow-y-hidden w-full border">
      <p>DashboardMain</p>
      {children}
    </div>
  );
};

export default DashboardMain;
