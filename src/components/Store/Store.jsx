import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import getStoreProductsList from './getStoreProducts';
import NavBar from '../NavBar/NavBar';
import './Store.css';

function Store() {
  // useState for what's currently in the cart
  const [allProducts, setAllProducts] = useState({});
  const [cartProducts, setCartProducts] = useState({});
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
      <NavBar cartProducts={cartProducts}/>
      <Outlet context={[allProducts, finishedLoading, cartProducts, setCartProducts]}/>
    </>
  );
}

export default Store;
