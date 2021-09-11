import firebase from "firebase";
import "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyB-Bpy1VQIVsLd1Fs0yaTNiTHTSevwaioM",
  authDomain: "facebook-v2-clone-fbe82.firebaseapp.com",
  projectId: "facebook-v2-clone-fbe82",
  storageBucket: "facebook-v2-clone-fbe82.appspot.com",
  messagingSenderId: "737216261745",
  appId: "1:737216261745:web:d51a341675d89678a7b5d0"
};

  const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };