async function fetchStoreProducts() {
  const productsResponse = await fetch(
    `https://fakestoreapi.com/products/category/electronics`,
    { mode: 'cors' },
  );
  const productsJson = await productsResponse.json();
  return productsJson;
}

async function getStoreProductsList() {
  // the only real purpose of this is to trim down the original JSON
  const productsJson = await fetchStoreProducts();
  const productsArray = productsJson.map((productJson) => {
    const productId = productJson.id;
    const productName = productJson.title;
    const productDescription = productJson.description;
    const productPrice = productJson.price;
    const productImageUrl = productJson.image;
    return {
      id: productId,
      name: productName,
      description: productDescription,
      price: productPrice,
      imageUrl: productImageUrl,
    };
  });
  return productsArray;
}

export default getStoreProductsList;
