import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { fbc } from "./firebase.js";
import { GoogleAuthProvider, getAuth, signInWithRedirect, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";


// web app's Firebase configuration
const firebaseConfig = fbc();

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleauth = () => {
  const google_provider = new GoogleAuthProvider(app);
  signInWithRedirect(auth, google_provider);
};

const pagelogout = ()=>{
  signOut(auth).then(() => {
    window.location.replace('/');
  }).catch((error) => {
    console.log('An error happened.: \b'+ error)
  });
};

onAuthStateChanged(auth, (user) => {
  if (user&&window.location.pathname == "/") window.location.replace("/dashboard");
  if (user){
    // User is signed in
    document.getElementById("logout").addEventListener('click', pagelogout);
  }
  if (!user) {
    // User is not signed in
    document.getElementById("authWith").addEventListener('click', googleauth);
  }
  
});

