import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const MyComponent = () => {
  const navLinkStyle = ({ isActive }) => {
    return { fontWeight: isActive ? 'bold' : 'normal' };
  };
  const menuItems = [
    { id: 'item0', label: 'Enrollments', path: '/dashboard/enrollments' },
    { id: 'item1', label: 'Course', path: '/dashboard/course/1' },
    { id: 'item2', label: 'Cart', path: '/dashboard/cart' },
    { id: 'item3', label: 'Checkout', path: '/dashboard/checkout' },
    { id: 'item4', label: 'Profile', path: '/dashboard/profile' },
  ];

  return (
    <ul className="text-lg space-y-2 pointer mt-14 border-b-2">
      {menuItems.map((item) => (
        <NavLink to={item.path} style={navLinkStyle} key={item.id}>
          <li key={item.id} className="hover:bg-secondary px-4 py-2">
            {item.label}
          </li>
        </NavLink>
      ))}
    </ul>
  );
};

export default MyComponent;
