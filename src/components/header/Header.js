import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../pages/home/home.css';
import { faEnvelope, faHome, faLock, faPhone, faShoppingBag, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Header = () => {

  const navigate = useNavigate()

  const userInfo = localStorage.getItem('userInfo');

  const signoutHandler = () => {
    localStorage.removeItem('userInfo');
    toast.success("You have successfully logged out!");
    navigate('/login');
  }

  return (
    <div className="header-row">
      <div className="header-top">
        <span>
          <FontAwesomeIcon icon={faPhone} />
          +304092051
        </span>
        <span>
          <FontAwesomeIcon icon={faEnvelope} />
          admin@gmail.com
        </span>
      </div>
      <div className="header-menu">
        <div className="header-logo">
          <Link to="/">
            <h2 className="header-logo-title">Khan Haque</h2>
          </Link>
        </div>
        <div className="header-nav">
          <NavLink to="/" activeclassname="active">
            Home
          </NavLink>
          <NavLink to="/shop" activeclassname="active">
            Shop
          </NavLink>
          <NavLink to="/sellers" activeclassname="active">
            Sellers
          </NavLink>
        </div>
        <div className="header-action">
          <Link to="/account">
            <FontAwesomeIcon icon={faHome} />
          </Link>
          <Link to="/follow">
            <FontAwesomeIcon icon={faUser} />
            <span className="header-cart-badge">0</span>
          </Link>
          <Link to="/cart">
            <FontAwesomeIcon icon={faShoppingBag} />
            <span className="header-cart-badge">0</span>
          </Link>
          {
            userInfo ? (
            <span className="logout" onClick={signoutHandler}>
              <FontAwesomeIcon icon={faLock} />
              Logout
            </span>
          ) : (
            <Link to="/login">
              <FontAwesomeIcon icon={faLock} />
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header
