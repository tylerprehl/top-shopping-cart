import { useOutletContext } from 'react-router-dom';
import PropTypes from 'prop-types';

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
  const [allProducts] = useOutletContext([]);

  return (
    <>
      <h1>Shop</h1>
      <section className="item-cards-container">
        {allProducts.map((product) => {
          return (
            <ItemCard
              key={product.id}
              id={product.id}
              name={product.name}
              description={trimDescription(product.description)}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          );
        })}
      </section>
    </>
  );
}

Shop.propTypes = {
  allProducts: PropTypes.array, 
}


export default Shop;
