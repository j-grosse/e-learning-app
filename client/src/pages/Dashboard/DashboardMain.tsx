import { ReactNode } from 'react';

interface DashboardMainProps {
  children: ReactNode;
}
const DashboardMain = ({ children }: DashboardMainProps) => {
  return (
    <div className="flex w-full p-0 pb-4 overflow-y-hidden border-b-2 dark:border-gray-400">
      <div className="w-full mx-auto p-1">{children}</div>
    </div>
  );
};

export default DashboardMain;
