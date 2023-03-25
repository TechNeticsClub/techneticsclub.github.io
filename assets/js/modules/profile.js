import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { fbc } from "./firebase.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";


// web app's Firebase configuration
const firebaseConfig = fbc();


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


onAuthStateChanged(auth, (user) => {
  if (!user) window.location.replace("/");
  if (user) {
    // User is signed in and Logout setup
    // login page info
    info.innerHTML=`
    <center>
      <img src="${user.photoURL}" alt="${user.displayName}" width="70px" height="70px" style="border:2px solid black;border-radius:50%;"/>
      <h1>Hello ${user.displayName}</h1><br>
      <button class="btn btn-danger text-uppercase" id="logout">Logout</button>
    </center>
    `;
  }
  
});