import { useOutletContext } from 'react-router-dom';
import ItemInCart from '../ItemInCart/ItemInCart';
import './Cart.css';

function Cart() {
  const [allProducts, finishedLoading, cartProducts, setCartProducts] =
    useOutletContext();

  return (
    <>
      <h1>Cart</h1>
      <section>
        <div className="cart-items-container">
          <hr></hr>
          {Object.keys(cartProducts).map((productId) => {
            console.log(productId);
            return (
              <>
                <ItemInCart name={allProducts[productId].name} quantity={cartProducts[productId]} imageUrl={allProducts[productId].imageUrl}/>
                <hr></hr>
              </>
            )
          })}
        </div>
      </section>
    </>
  );
}

export default Cart;
