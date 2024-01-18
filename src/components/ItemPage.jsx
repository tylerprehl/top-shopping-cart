import { useState, useEffect } from 'react';
import { useParams, useOutletContext } from 'react-router-dom';

const ItemPage = () => {
  const { productId } = useParams();
  const [allProducts] = useOutletContext([]);
  const [product, setProduct] = useState({});

  useEffect(() => {
    console.log(allProducts);
    setProduct(
      allProducts.find((item) => {
        if (item.id === Number(productId)) {
          return true;
        }
      }),
    );
  }, [allProducts, productId]);

  return (
    <div>
      <h1>{product.name}</h1>
    </div>
  );
};

export default ItemPage;
