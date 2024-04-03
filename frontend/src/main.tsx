import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKcfXZ5zrsbESXue6BBBluSBPz_Y3QoH8",
  authDomain: "learn2travel-e504e.firebaseapp.com",
  projectId: "learn2travel-e504e",
  storageBucket: "learn2travel-e504e.appspot.com",
  messagingSenderId: "430733241979",
  appId: "1:430733241979:web:47dc8ca7e80f5d701cfcde",
  measurementId: "G-H9V6S6XXRG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
