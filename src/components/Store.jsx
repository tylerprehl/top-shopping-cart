import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import getStoreProductsList from './getStoreProducts';
import NavBar from './NavBar';
import '../styles/Store.css';

function Store() {
  // useState for what's currently in the cart
  const [allProducts, setProducts] = useState([]);
  // each item card Links to the appropriate idemId URL
  useEffect(() => {
    async function getAndSetProducts() {
      const productList = await getStoreProductsList();
      setProducts(productList);
    }
    getAndSetProducts();
  }, []);

  return (
    <>
      <NavBar />
      <Outlet context={[allProducts]}/>
    </>
  );
}

export default Store;
