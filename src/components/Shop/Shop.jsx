import { useOutletContext } from 'react-router-dom';
import PropTypes from 'prop-types';

import ItemCard from '../ItemCard/ItemCard';
import './Shop.css';

function trimString(description, charsAllowed) {

  
  if (description.length > charsAllowed) {
    let trimmedDescription = description.substr(0, charsAllowed);
    trimmedDescription = trimmedDescription.substr(
      0,
      Math.min(trimmedDescription.length, trimmedDescription.lastIndexOf(' ')),
    );
    return trimmedDescription + '...';
  }
  else {
    return description;
  }
}

function Shop() {
  const [allProducts] = useOutletContext([]);

  return (
    <>
      <h1>Shop</h1>
      <section className="item-cards-container">
        {Object.entries(allProducts).map(([productId, productData]) => {
          return (
            <ItemCard
              key={productId}
              id={productId}
              name={trimString(productData.name, 60)}
              description={trimString(productData.description, 100)}
              price={productData.price}
              imageUrl={productData.imageUrl}
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
