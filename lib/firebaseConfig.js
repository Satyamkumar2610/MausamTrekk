// lib/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAPJb7G6ihRh00Zygucjq0xK72eMhQ3CCs",
  authDomain: "mausamtrek.firebaseapp.com",
  projectId: "mausamtrek",
  storageBucket: "mausamtrek.firebasestorage.app",
  messagingSenderId: "480042623533",
  appId: "1:480042623533:web:80e1fcfdc3cda17a654ea4",
  measurementId: "G-FX9HP7MTKW"
};

const app = initializeApp(firebaseConfig);

// Optional analytics only on client
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      getAnalytics(app);
    }
  });
}

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
