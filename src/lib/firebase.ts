// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  projectId: "pios-path",
  appId: "1:224629238869:web:88c6128a7337cda92578dc",
  storageBucket: "pios-path.firebasestorage.app",
  apiKey: "AIzaSyDEtQlnm9VBUQtyWZU9eNDrGpEocnSF0ws",
  authDomain: "pios-path.firebaseapp.com",
  messagingSenderId: "224629238869",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const analytics = (async () => {
    if (typeof window !== 'undefined') {
        const isSupportedResult = await isSupported();
        if (isSupportedResult) {
            return getAnalytics(app);
        }
    }
    return null;
})();


export { app, analytics };
