import { Link } from 'react-router-dom';
import gearIcon from '../assets/gear-icon.png';
import cartIcon from '../assets/shopping-cart.png';

import './NavBar.css';

function NavBar() {
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
          <Link to="/shop">Shop</Link>
        </div>
        <div className="cart-container">
          <Link to="/cart" className="link">
            <img src={cartIcon} className="cart" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default NavBar;

/*
        <Link to="/">Home</Link>
        <Link to="shop">Shop</Link>
*/
