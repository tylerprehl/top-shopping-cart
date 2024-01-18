import { useState, useEffect } from 'react';
import getStoreProductsList from './getStoreProducts';
import '../styles/Shop.css';

function Shop() {
  const [products, setProducts] = useState([]);
  // each item card Links to the appropriate idemId URL
  useEffect(() => {
    async function getAndSetProducts() {
      const productList = await getStoreProductsList();
      console.log(productList);
      setProducts(productList);
    }
    getAndSetProducts();
  }, []);

  return (
    <>
      <h1>Shop</h1>
      <p className="item-cards-container">
          Welcome to the shop
      </p>
    </>
  )
}

export default Shop;