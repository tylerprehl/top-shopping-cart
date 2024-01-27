import './ItemInCart.css';

function ItemInCart({ name }) {

  return (
    <>
      <div className="cart-item-container">
        {name}
      </div>
    </>
  );
}

export default ItemInCart;
