import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gearIcon from '../../assets/gear-icon.png';
import cartIcon from '../../assets/shopping-cart.png';
import './NavBar.css';

function NavBar({ cartProducts }) {
  return (
    <>
      <div className="navbar-container">
        <div className="logo-container">
          <Link to="/" className="link">
            <img src={gearIcon} alt="gear icon" className="logo" />
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
            <img src={cartIcon} alt="cart icon" className="cart" />
            {Object.entries(cartProducts).length > 0 ?
              <div className="cart-items-count">
                {Object.values(cartProducts).reduce((accumulator, itemCount) => {
                  return accumulator + Number(itemCount);
                })}
              </div>
            : null}
          </Link>
        </div>
      </div>
    </>
  );
}

export default NavBar;
