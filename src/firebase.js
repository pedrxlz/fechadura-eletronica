// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCPNlb3hfmEfJ4JQwL0iTwxsUypL6chCs",
  authDomain: "fechadura-eletronica-rfid.firebaseapp.com",
  databaseURL: "https://fechadura-eletronica-rfid-default-rtdb.firebaseio.com",
  projectId: "fechadura-eletronica-rfid",
  storageBucket: "fechadura-eletronica-rfid.appspot.com",
  messagingSenderId: "217057460873",
  appId: "1:217057460873:web:f6c782cc789de4771cfc58",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
