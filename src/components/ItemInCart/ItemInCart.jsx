import './ItemInCart.css';

function ItemInCart({ productId, name, quantity, imageUrl, handleDeletion }) {
  return (
    <>
      <div className="cart-item-container">
        <div className="image-container">
          <img className="product-image" src={imageUrl} alt={name}></img>
        </div>
        <span className="product-name">{name}</span>
        <span className="quantity">{`Quantity: ${quantity}`}</span>
        <button className="delete-button" id={productId} onClick={handleDeletion}>
          Delete
        </button>
      </div>
      <hr></hr>
    </>
  );
}

export default ItemInCart;
