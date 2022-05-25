// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXnv-68v56rjh6DMrJKds-q-CBZQGErX8",
  authDomain: "mateico-e99f8.firebaseapp.com",
  projectId: "mateico-e99f8",
  storageBucket: "mateico-e99f8.appspot.com",
  messagingSenderId: "516330348405",
  appId: "1:516330348405:web:1ce4df2d87a16767813d3c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore (app);

export default db