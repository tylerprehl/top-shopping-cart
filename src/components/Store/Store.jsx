import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import getStoreProductsList from './getStoreProducts';
import NavBar from '../NavBar';
import './Store.css';

function Store() {
  // useState for what's currently in the cart
  const [allProducts, setAllProducts] = useState({});
  const [finishedLoading, setLoadingState] = useState(false)
  
  // each item card Links to the appropriate idemId URL
  useEffect(() => {
    async function getAndSetProducts() {
      const productList = await getStoreProductsList();
      setAllProducts(productList);
      setLoadingState(true);
    }

    getAndSetProducts();
  }, []);

  return (
    <>
      <NavBar />
      <Outlet context={[allProducts, finishedLoading]}/>
    </>
  );
}

export default Store;
