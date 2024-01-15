import { Link, Outlet } from 'react-router-dom';
import gearIcon from '../assets/gear-icon.png';
import cartIcon from '../assets/shopping-cart.png';

import './Store.css';

function Store() {
  return (
    <>
      <div className="navbar-container">
        <div className="logo-container">
          <Link to="/" className="link">
            <img src={gearIcon} className="logo" />
          </Link>
        </div>
        <div className="link">
          <Link to="/">Home</Link>
        </div>
        <div className="link">
          <Link to="/store/shop">Shop</Link>
        </div>
        <div className="cart-container">
          <Link to="/store/cart" className="link">
            <img src={cartIcon} className="cart" />
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Store;
