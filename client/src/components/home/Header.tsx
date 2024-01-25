import { useState, useContext } from 'react';
import { NavLink, Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/Auth';
import daisyui from 'daisyui';
import {
  Navbar,
  Dropdown,
  Indicator,
  Badge,
  Button,
  Card,
} from 'react-daisyui';

// import Login from '../Login';
// import Register from '../Register';

// import Logo from '../../assets/logo.png';
// import elearnlogo from '../../assets/elearnlogo.png';

const Header = () => {
  // const { user, logout } = useContext(AuthContext);
  // const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <Navbar
        className="bg-primary shadow-xl"
      >
        <div className="flex-1">
          <Button tag="a" className="text-xl normal-case" color="ghost">
            daisyUI
          </Button>
        </div>
        <div className="flex-none">
          <Dropdown end>
            <Button tag="label" tabIndex={0} color="ghost" shape="circle">
              <Indicator>
                <Badge size="sm" className={Indicator.Item.className()}>
                  8
                </Badge>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </Indicator>
            </Button>
            <Dropdown.Menu className="mt-3 z-[1] card card-compact w-52 !p-0">
              <Card.Body>
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <Card.Actions>
                  <Button color="primary" fullWidth>
                    View cart
                  </Button>
                </Card.Actions>
              </Card.Body>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown end>
            <Button
              tag="label"
              tabIndex={0}
              color="ghost"
              className="avatar"
              shape="circle"
            >
              <div className="w-10 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </Button>
            <Dropdown.Menu className="mt-3 z-[1] w-52 menu-sm">
              <li>
                <a className="justify-between">
                  Profile
                  <Badge className="badge">New</Badge>
                </a>
              </li>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Navbar>
    </>
  );
};

export default Header;
