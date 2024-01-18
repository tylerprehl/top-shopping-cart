import { useState, useEffect } from 'react';
import getStoreProductsList from './getStoreProducts';
import ItemCard from './ItemCard';
import '../styles/Shop.css';

function trimDescription(description) {
  let trimmedDescription = description.substr(0, 100);
  trimmedDescription = trimmedDescription.substr(
    0,
    Math.min(trimmedDescription.length, trimmedDescription.lastIndexOf(' ')),
  );
  return trimmedDescription + '...';
}

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
        {products.map((product) => {
          return (
            <ItemCard
              key={product.id}
              name={product.name}
              description={trimDescription(product.description)}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          );
        })}
      </p>
    </>
  );
}

export default Shop;
