import { useState, useEffect } from 'react';
import { useParams, useOutletContext } from 'react-router-dom';
import './ItemPage.css';

const ItemPage = () => {
  const { productId } = useParams();
  const [allProducts, finishedLoading] = useOutletContext();

  const [productData, setProduct] = useState({});
  // const []

  useEffect(() => {
    if (finishedLoading) {
      console.log(allProducts);
      setProduct(allProducts[productId]);
    }
  }, [allProducts, productId, finishedLoading]);

  return (
    <div className="item-page-container">
      <h1>{productData.name}</h1>
      <img className="product-image" src={productData.imageUrl} alt={productData.name}></img>
      <section className="item-info-container">
          <p className="edit-quantity-container">
            <button className="edit-quantity-button">+</button>
            <div className="quantity-field">2</div>
            <button className="edit-quantity-button">−</button>
          </p>
          <button className="add-to-cart">Add to Cart</button>
          <p className="product-description">{productData.description}</p>
      </section>
    </div>
  );
};

export default ItemPage;
