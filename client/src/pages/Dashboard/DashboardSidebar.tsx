import { Link } from 'react-router-dom';

const DashboardSidebar = () => {
  return (
    <div>
      {/* DashboardSidebar */}
      <ul className="w-32 py-4 px-8 space-y-4 bg-secondary">
        <li>
          <Link to="/dashboard/course">Course</Link>
        </li>
        <li>
          <Link to="/dashboard/components">Components</Link>
        </li>
        <li>
          <Link to="/dashboard/cart">Cart</Link>
        </li>
        <li>
          <Link to="/dashboard/checkout">Checkout</Link>
        </li>
        <li>
          <Link to="/dashboard/profile">Profile</Link>
        </li>
      </ul>
    </div>
  );
};

export default DashboardSidebar;
