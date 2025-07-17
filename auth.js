// auth.js
import { app } from "./firebase-config.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

const auth = getAuth(app);

window.register = function () {
  const name = document.getElementById("fullName").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;
  const msg = document.getElementById("signupMessage");

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Save name to Firebase user profile
    return userCredential.user.updateProfile({
      displayName: name
    });
  })
    .then(() => {
      window.location.href = "homepage.html";
    })
    .catch(err => {
      msg.textContent = err.message;
    });
};

window.login = function () {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  const msg = document.getElementById("loginMessage");

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "homepage.html";
    })
    .catch(err => {
      msg.textContent = err.message;
    });
};
