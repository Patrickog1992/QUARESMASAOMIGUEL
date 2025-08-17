// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  projectId: "pios-path",
  appId: "1:224629238869:web:88c6128a7337cda92578dc",
  storageBucket: "pios-path.firebasestorage.app",
  apiKey: "AIzaSyDEtQlnm9VBUQtyWZU9eNDrGpEocnSF0ws",
  authDomain: "pios-path.firebaseapp.com",
  messagingSenderId: "224629238869",
};

// Initialize Firebase
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

let analytics;

if (typeof window !== 'undefined') {
    analytics = getAnalytics(app);
}

export { app, analytics };
