import firebase from "firebase";
require("@firebase/firestore");
/*
var firebaseConfig = {
  apiKey: "AIzaSyD063WTRRp9hqHDrry0LRq95pNu3zqpG94",
  authDomain: "bicicleta-eletronica.firebaseapp.com",
  projectId: "bicicleta-eletronica",
  storageBucket: "bicicleta-eletronica.appspot.com",
  messagingSenderId: "777022380523",
  appId: "1:777022380523:web:85da7254f92ee85c5be1ae"
};
*/
const firebaseConfig = {
  apiKey: "AIzaSyCnZkSGphABPzn8oqH2Y7z7XSf8nokPass",
  authDomain: "c-71-27ecc.firebaseapp.com",
  projectId: "c-71-27ecc",
  storageBucket: "c-71-27ecc.appspot.com",
  messagingSenderId: "212914548961",
  appId: "1:212914548961:web:a72c0ac93cb51279ad47a0"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
