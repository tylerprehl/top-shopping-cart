import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gearIcon from '../../assets/gear-icon.png';
import cartIcon from '../../assets/shopping-cart.png';
import './NavBar.css';

function NavBar({ cartProducts }) {
  console.log(cartProducts);
  const keys = Object.keys(cartProducts);
  console.log(keys);
  console.log(cartProducts[keys[0]]);
  console.log(keys.reduce((accumulator, productId) => {
    accumulator + Number(cartProducts[productId]);
  }));
  console.log(Object.keys(cartProducts).reduce((accumulator, productId) => {
                  accumulator + Number(cartProducts[productId])
                  }));

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
                {Object.keys(cartProducts).reduce((accumulator, productId) => {
                  accumulator + Number(cartProducts[productId]);
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
