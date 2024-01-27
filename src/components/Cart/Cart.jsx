import { useOutletContext } from 'react-router-dom';
import ItemInCart from '../ItemInCart/ItemInCart';
import './Cart.css';

function Cart() {
  const [allProducts,, cartProducts, setCartProducts] =
    useOutletContext();

  const handleIncreaseQuantity = (e) => {
    const productId= e.target.id;
    const newCartProducts = {...cartProducts};
    newCartProducts[productId] = newCartProducts[productId] + 1;
    setCartProducts(newCartProducts);
  }
  
  const handleDecreaseQuantity = (e) => { 
    const productId= e.target.id;
    if (cartProducts[productId] > 1) {
      const newCartProducts = {...cartProducts};
      newCartProducts[productId] = newCartProducts[productId] -1;
      setCartProducts(newCartProducts);
    }
  }
  

  const handleDeletion = (e) => {
    const productId = e.target.id;
    const newCartProducts = {...cartProducts};
    delete newCartProducts[productId];
    setCartProducts(newCartProducts);
  };

  return (
    <>
      <h1>Cart</h1>
      <section>
        {Object.entries(cartProducts).length > 0 ? (
          <div className="cart-items-container">
            <hr></hr>
            {Object.keys(cartProducts).map((productId) => {
              return (
                <ItemInCart
                  key={productId}
                  productId={productId}
                  name={allProducts[productId].name}
                  quantity={cartProducts[productId]}
                  imageUrl={allProducts[productId].imageUrl}
                  handleIncreaseQuantity={handleIncreaseQuantity}
                  handleDecreaseQuantity={handleDecreaseQuantity}
                  handleDeletion={handleDeletion}
                />
              );
            })}
          </div>
        ) : (
          <></>
        )}
      </section>
    </>
  );
}

export default Cart;
