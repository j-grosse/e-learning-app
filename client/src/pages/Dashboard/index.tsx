import { ReactNode } from 'react';
import DashboardMain from './DashboardMain';
import DashboardSidebar from './DashboardSidebar';
// import Footer from '../../components/common/Footer';
// import NotFound from '../NotFound';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    // dashboard sidebar remains fixed on the side
    <div className="flex w-full bg-background dark:bg-background">
      <DashboardSidebar />
      <DashboardMain>
        {/* DashboardNavbar  <DashboardNavbar /> */}
        {children}
      </DashboardMain>
    </div>
  );
};

export default DashboardLayout;
