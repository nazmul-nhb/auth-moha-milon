// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDMvdUj2CkSK2V04FG7rySbQTiTiWICW-Y",
    authDomain: "auth-moha-milon-10bb5.firebaseapp.com",
    projectId: "auth-moha-milon-10bb5",
    storageBucket: "auth-moha-milon-10bb5.appspot.com",
    messagingSenderId: "454102967543",
    appId: "1:454102967543:web:9a7bd6d7d051020d361ff2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);