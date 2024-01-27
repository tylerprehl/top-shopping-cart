import './ItemInCart.css';

function ItemInCart({ productId, name, quantity, imageUrl, handleIncreaseQuantity, handleDecreaseQuantity, handleDeletion }) {
  

  
  return (
    <>
      <div className="cart-item-container">
        <div className="image-container">
          <img className="product-image" src={imageUrl} alt={name}></img>
        </div>
        <span className="product-name">{name}</span>
        
        <p className="edit-quantity-container">
          <span className="quantity-label">Quantity</span>
          <button
            className="edit-quantity-button"
            id={productId}
            onClick={handleIncreaseQuantity}
          >
            +
          </button>
          <span className="quantity-field">{quantity}</span>
          <button
            className="edit-quantity-button"
            id={productId}
            onClick={handleDecreaseQuantity}
          >
            &#x2212;
          </button>
        </p>
        <button className="delete-button" id={productId} onClick={handleDeletion}>
          Delete
        </button>
      </div>
      <hr></hr>
    </>
  );
}

export default ItemInCart;
