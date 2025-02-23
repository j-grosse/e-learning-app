import { NavLink } from 'react-router-dom';

const DashboardSidebar = () => {
  const navLinkStyle = ({ isActive }) => {
    return { fontWeight: isActive ? 'bold' : 'normal' };
  };
  const menuItems = [
    // { id: 'item0', label: 'Enrollments', path: '/dashboard/enrollments' },
    { id: 'item1', label: 'Course', path: '/dashboard/course' },
    { id: 'item2', label: 'Editor', path: '/dashboard/editor' },
    { id: 'item3', label: 'Cart', path: '/dashboard/cart' },
    // { id: 'item4', label: 'Checkout', path: '/dashboard/checkout' },
    { id: 'item5', label: 'Profile', path: '/dashboard/profile' },
  ];

  return (
    <ul className="min-h-[70vh] text-sm space-y-2 pointer mt-4 border-b-2 dark:border-gray-400">
      {menuItems.map((item) => (
        <NavLink to={item.path} style={navLinkStyle} key={item.id}>
          <li key={item.id} className="hover:bg-secondary px-3 py-2">
            {item.label}
          </li>
        </NavLink>
      ))}
    </ul>
  );
};

export default DashboardSidebar;
