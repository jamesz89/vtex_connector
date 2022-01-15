const mapper = (data) => {
  const output = [];

  for (let i = 0; i < data.length; i++) {
    output.push({
      brand: data[i].brand,
      categoryId: data[i].categoryId,
      imageUrl: data[i].items[0].images[0].imageUrl,
      name: data[i].productName,
      offerPrice: data[i].items[0].sellers[0].commertialOffer.Price,
      price: data[i].items[0].sellers[0].commertialOffer.ListPrice,
      sku: data[i].productId,
      url: data[i].link,
    });
    console.log("mapping...", i, data[i].productName);
  }
  return output
};

export default mapper