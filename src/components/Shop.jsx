import { useOutletContext } from 'react-router-dom';
import PropTypes from 'prop-types';

import ItemCard from './ItemCard';
import '../styles/Shop.css';

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
        {allProducts.map((product) => {
          return (
            <ItemCard
              key={product.id}
              id={product.id}
              name={trimString(product.name, 60)}
              description={trimString(product.description, 100)}
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
