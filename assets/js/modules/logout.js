import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { fbc } from "./firebase.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";

const auth = getAuth(initializeApp(fbc()));

onAuthStateChanged(auth, (user) => {
  if (!user) window.location.replace("/");
  if (user) {
    signOut(auth).then(() => {
          window.location.replace('/');
        }).catch((error) => {
          console.log('An error happened.: \n'+ error)
        });
  }
  
});