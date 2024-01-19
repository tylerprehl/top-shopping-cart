import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ItemCard.css';

function ItemCard({ id, name, description, price, imageUrl }) {
  return (
    <>
      <Link to={`/store/shop/${id.toString()}`} className="item-card">
      <div className="image-background">
          <img src={imageUrl} alt={name} className="item-image"></img>
        </div>
        <div className="item-name">
          <strong>{name}</strong>
        </div>
        <div className="item-price">
          <strong>${price}</strong>
        </div>
        <div className="item-description">{description}</div>
      </Link>
    </>
  );
}

ItemCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  imageUrl: PropTypes.string,
};

export default ItemCard;
