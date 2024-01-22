import { useState, useEffect } from 'react';
import { useParams, useOutletContext } from 'react-router-dom';
import './ItemPage.css';

const ItemPage = () => {
  const { productId } = useParams();
  const [allProducts, finishedLoading, cartProducts, setCartProducts] =
    useOutletContext();

  const [productData, setProductData] = useState({});
  const [quantity, setQuantity] = useState(1);

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (productId in cartProducts) {
      cartProducts[productId] = cartProducts[productId] + quantity;
      setCartProducts(new Object(cartProducts));
    } else {
      cartProducts[productId] = quantity;
      setCartProducts(new Object(cartProducts));
    }
    alert(`${quantity} of ${productData.name} ${quantity === 1 ? 'has' : 'have'} been added to the cart!`);
  };

  useEffect(() => {
    if (finishedLoading) {
      setProductData(allProducts[productId]);
    }
  }, [allProducts, productId, finishedLoading]);

  return (
    <div className="item-page-container">
      <h1>{productData.name}</h1>
      <img
        className="product-image"
        src={productData.imageUrl}
        alt={productData.name}
      ></img>
      <section className="item-info-container">
        <p className="edit-quantity-container">
          <button
            className="edit-quantity-button"
            onClick={handleIncreaseQuantity}
          >
            +
          </button>
          <span className="quantity-field">{quantity}</span>
          <button
            className="edit-quantity-button"
            onClick={handleDecreaseQuantity}
          >
            &#x2212;
          </button>
        </p>
        <button className="add-to-cart" onClick={handleAddToCart}>
          Add to Cart
        </button>
        <p className="product-description">{productData.description}</p>
      </section>
    </div>
  );
};

export default ItemPage;
