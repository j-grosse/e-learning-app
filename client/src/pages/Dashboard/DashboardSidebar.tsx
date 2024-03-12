import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const MyComponent = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  // const { item } = useParams();
  // console.log(item);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const navLinkStyle = ({ isActive }) => {
    return { fontWeight: isActive ? 'bold' : 'normal' };
  };
  const menuItems = [
    { id: 'item0', label: 'Enrollments', path: '/dashboard/enrollments' },
    { id: 'item1', label: 'Course', path: '/dashboard/course/1' },
    { id: 'item2', label: 'Components', path: '/dashboard/components' },
    { id: 'item3', label: 'Cart', path: '/dashboard/cart' },
    { id: 'item4', label: 'Checkout', path: '/dashboard/checkout' },
    { id: 'item5', label: 'Profile', path: '/dashboard/profile' },
  ];

  return (
    <ul className="text-lg space-y-2 pointer">
      {menuItems.map((item) => (
        <li
          key={item.id}
          onClick={() => handleItemClick(item.id)}
          className="hover:bg-secondary px-4 py-2"
        >
          <NavLink to={item.path} style={navLinkStyle}>
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MyComponent;
