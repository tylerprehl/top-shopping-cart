import { useState, useEffect } from 'react';
import { useParams, useOutletContext } from 'react-router-dom';

const ItemPage = () => {
  const { productId } = useParams();
  const [allProducts, finishedLoading] = useOutletContext();
  const [productData, setProduct] = useState({});

  useEffect(() => {
    if (finishedLoading) {
      console.log(allProducts);
      setProduct(allProducts[productId]);
    }
  }, [allProducts, productId, finishedLoading]);

  return (
    <div>
      <h1>{productData.name}</h1>
    </div>
  );
};

export default ItemPage;
