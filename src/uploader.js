import db from "../db/firestore.js";

const uploader = async (data) => {
  for (let i = 0; i < data.length; i++) {
    let docRef = db.collection("products").doc();
    await docRef.set({
      brand: data[i].brand,
      categoryId: data[i].categoryId,
      imageUrl: data[i].imageUrl,
      name: data[i].name,
      offerPrice: data[i].offerPrice,
      price: data[i].price,
      sku: data[i].sku,
      url: data[i].url,
    });
  }
};

export default uploader;
