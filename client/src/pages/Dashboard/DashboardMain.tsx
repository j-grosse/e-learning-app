import React, { ReactNode } from 'react';

interface DashboardMainProps {
  children: ReactNode;
}
const DashboardMain = ({ children }: DashboardMainProps) => {
  return (
    <div className="flex w-full min-h-screen p-8 overflow-y-hidden border-l-2 border-b-2 dark:border-gray-400">
      {children}
    </div>
  );
};

export default DashboardMain;
