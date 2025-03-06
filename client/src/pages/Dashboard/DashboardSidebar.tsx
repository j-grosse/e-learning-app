import { NavLink } from 'react-router-dom';

const DashboardSidebar = () => {
  const menuItems = [
    // { id: 'item0', label: 'Enrollments', path: '/dashboard/enrollments' },
    { id: 'item1', label: 'Course', path: '/dashboard/course' },
    { id: 'item2', label: 'Editor', path: '/dashboard/editor' },
    { id: 'item3', label: 'Cart', path: '/dashboard/cart' },
    // { id: 'item4', label: 'Checkout', path: '/dashboard/checkout' },
    { id: 'item5', label: 'Profile', path: '/dashboard/profile' },
  ];

  return (
    <ul className="min-h-[70vh] text-md space-y-1 pointer mt-2 border-b-2 dark:border-gray-400">
      {menuItems.map((item) => (
        <NavLink
          to={item.path}
          className={({ isActive }) =>
            `block ${
              isActive ? 'bg-gray-200 dark:bg-gray-600 rounded-r-md font-bold' : ''
            }`
          }
          key={item.id}
        >
          <li key={item.id} className="hover:bg-gray-200 dark:hover:bg-gray-600 rounded-r-md dark:text-foreground px-2 py-2">
            {item.label}
          </li>
        </NavLink>
      ))}
    </ul>
  );
};

export default DashboardSidebar;
