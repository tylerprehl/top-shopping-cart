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
            <div className="cart-items-count">1</div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default NavBar;