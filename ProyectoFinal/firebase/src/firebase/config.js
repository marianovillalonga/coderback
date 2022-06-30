import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDWspZ7-iYg2pxSCq_gqRCgEOK6wTbxqDw",
  authDomain: "fb-crud-react-e75ec.firebaseapp.com",
  projectId: "fb-crud-react-e75ec",
  storageBucket: "fb-crud-react-e75ec.appspot.com",
  messagingSenderId: "776958275235",
  appId: "1:776958275235:web:90fdfe3b2547de42155916"
};
// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
