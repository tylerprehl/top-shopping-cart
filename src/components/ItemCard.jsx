import PropTypes from 'prop-types';
import '../styles/ItemCard.css';

function ItemCard ({ name, description, price, imageUrl }) {

  return (
    <>
      <div className="item-card">
        <div className="item-name"><strong>{name}</strong></div>
        <img src={imageUrl} alt={name} className="item-image"></img>
        <div className="item-price"><strong>${price}</strong></div>
        <div className="item-description">{description}</div>
      </div>
    </>
  )
}

ItemCard.propTypes = {
  name: PropTypes.string, 
  description: PropTypes.string,
  price: PropTypes.number,
  imageUrl: PropTypes.string,
}

export default ItemCard;