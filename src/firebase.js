// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "YOUR_FIREBASE_API_KEY",
    authDomain: "techsquad360v.firebaseapp.com",
    projectId: "techsquad360v",
    storageBucket: "techsquad360v.appspot.com",
    messagingSenderId: "717421847947",
    appId: "1:717421847947:web:b9444d8208aaa20e4a7b8e",
    measurementId: "G-WK1JWRKMT2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);