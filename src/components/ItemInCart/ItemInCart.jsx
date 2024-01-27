import './ItemInCart.css';

function ItemInCart({ name, quantity, imageUrl }) {
  return (
    <>
      <div className="cart-item-container">
        <div className="image-container">
          <img className="product-image" src={imageUrl}></img>
        </div>
        <span className="product-name">{name}</span>
        <span className="quantity">{`Quantity: ${quantity}`}</span>
      </div>
    </>
  );
}

export default ItemInCart;
