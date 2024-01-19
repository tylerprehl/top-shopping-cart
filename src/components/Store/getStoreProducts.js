async function getStoreProductsList() {
  // the only real purpose of this is to trim down the original JSON
  const productsResponse = await fetch(
    `https://fakestoreapi.com/products/category/electronics`,
    { mode: 'cors' },
  );
  const productsJson = await productsResponse.json();

  let productsDict = {};

  productsJson.forEach((productJson) => {
    productsDict[productJson.id] = {
      name: productJson.title,
      description: productJson.description,
      price: productJson.price,
      imageUrl: productJson.image,
    };
  });
  console.log(productsDict);
  return productsDict;
}

export default getStoreProductsList;
