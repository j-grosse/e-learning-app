import React, { ReactNode } from 'react';

interface DashboardMainProps {
  children: ReactNode;
}
const DashboardMain = ({ children }: DashboardMainProps) => {
  return (
    <div className="flex w-full min-h-screen p-3 pb-4 overflow-y-hidden border-l-2 border-b-2 dark:border-gray-400">
      <div className="w-full max-w-screen mx-auto">{children}</div>
    </div>
  );
};

export default DashboardMain;
