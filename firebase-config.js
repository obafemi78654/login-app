// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyDoLXbJyG5tLj5ahbnTnaz3W3-fV1uu-Ik",
  authDomain: "login-app-5e6f1.firebaseapp.com",
  projectId: "login-app-5e6f1",
  storageBucket: "login-app-5e6f1.appspot.com",
  messagingSenderId: "323710798648",
  appId: "1:323710798648:web:b2c0c333c9e11716d84fcd"
};

export const app = initializeApp(firebaseConfig);
