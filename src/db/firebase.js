import { initializeApp } from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDwuXjWTY2zl4vD6iZaK7GVmGkqPpZisgQ",
  authDomain: "offers-recommender.firebaseapp.com",
  projectId: "offers-recommender",
  storageBucket: "offers-recommender.appspot.com",
  messagingSenderId: "1075970369688",
  appId: "1:1075970369688:web:23c843d34b32763ff308ed",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const getProducts = async (db) => {
  const productsCol = collection(db, 'products')
  const productSnapshot = await getProducts(productsCol)
  const productList = productSnapshot.docs.map(doc => doc.data)
  return productList
}

(async () => {
  const products = await getProducts(db)
  console.log(products)
})()

