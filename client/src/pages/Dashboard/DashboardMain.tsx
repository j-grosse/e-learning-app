import React, { ReactNode } from 'react';

interface DashboardMainProps {
  children: ReactNode;
}
const DashboardMain = ({ children }: DashboardMainProps) => {
  return (
    <div className="flex w-full max-h-screen p-8 overflow-y-hidden border-2">
      {children}
    </div>
  );
};

export default DashboardMain;
