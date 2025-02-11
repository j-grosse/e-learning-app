import React, { ReactNode } from 'react';

interface DashboardMainProps {
  children: ReactNode;
}
const DashboardMain = ({ children }: DashboardMainProps) => {
  return (
    <div className="flex w-full p-3 pb-4 overflow-y-hidden border-l-2 border-b-2 dark:border-gray-400">
      <div className="w-full mx-auto p-4">{children}</div>
    </div>
  );
};

export default DashboardMain;
