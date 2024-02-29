import React from 'react'
import { Link } from 'react-router-dom'

const DashboardSidebar = () => {
  return (
    <div>
        {/* DashboardSidebar */}
        <ul>
            <li><button className="w-32 bg-secondary"><Link to="/dashboard/cart">Cart</Link></button></li>
            <li><button className="w-32 bg-secondary"><Link to="/dashboard/checkout">Checkout</Link></button></li>
            <li><button className="w-32 bg-secondary"><Link to="/dashboard/profile">Profile</Link></button></li>
        </ul>
    </div>
  )
}

export default DashboardSidebar