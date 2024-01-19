import { useState, useEffect } from 'react';
import { useParams, useOutletContext } from 'react-router-dom';

const ItemPage = () => {
  const { productId } = useParams();
  const [allProducts] = useOutletContext([]);
  const [productData, setProduct] = useState({});

  useEffect(() => {
    console.log(allProducts);
    setProduct(allProducts[productId]);
  }, [allProducts, productId]);

  return (
    <div>
      <h1>{productData.name}</h1>
    </div>
  );
};

export default ItemPage;
