async function getStoreProduct(productId) {
  const productResponse = await fetch(
    `https://fakestoreapi.com/products/${productId}`,
    { mode: 'cors' },
  );
  const productJson = await productResponse.json();
  return productJson;
}

export default getStoreProduct;