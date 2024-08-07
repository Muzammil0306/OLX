import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword,signInWithPopup, GoogleAuthProvider} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDqNAAwaoe2965HcHOUt24KApLZ8Hq3dkI",
    authDomain: "olxproject-38eba.firebaseapp.com",
    projectId: "olxproject-38eba",
    storageBucket: "olxproject-38eba.appspot.com",
    messagingSenderId: "550964122945",
    appId: "1:550964122945:web:147f2a37c36d244f2cbdc0",
    measurementId: "G-5CRQ7XDEQB"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  
  
  
    
    createUserWithEmailAndPassword(auth, localStorage.getItem("email"), localStorage.getItem("password"))
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  
  
     let signgoodle = document.getElementById("google")
     if (signgoodle){
       signgoodle.addEventListener("click" , signgoodlefunc);
       function signgoodlefunc() {
         signInWithPopup(auth, provider)
           .then((result) => {
             // This gives you a Google Access Token. You can use it to access the Google API.
             const credential = GoogleAuthProvider.credentialFromResult(result);
             const token = credential.accessToken;
             // The signed-in user info.
             const user = result.user;
             // IdP data available using getAdditionalUserInfo(result)
             // ...
           }).catch((error) => {
             // Handle Errors here.
             const errorCode = error.code;
             const errorMessage = error.message;
             // The email of the user's account used.
             const email = error.customData.email;
             // The AuthCredential type that was used.
             const credential = GoogleAuthProvider.credentialFromError(error);
             // ...
           });
  
       }
     }