/**
 * Firebase Client Configuration and Initialization
 * Uses Vite environment variables with fallback defaults.
 */
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "YOUR_FIREBASE_API_KEY",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "techsquad360v.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "techsquad360v",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "techsquad360v.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "717421847947",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:717421847947:web:b9444d8208aaa20e4a7b8e",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-WK1JWRKMT2",
};

// Initialize Firebase Application
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Analytics if supported in the current environment
let analytics = null;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { analytics };
export default app;
