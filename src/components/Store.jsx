import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import '../styles/Store.css';

function Store() {
  // useState for what's currently in the cart


  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default Store;
