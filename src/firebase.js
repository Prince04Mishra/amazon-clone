// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFjNwbhfdlr-hJ3zvJgEiukq_kF7Xebyo",
  authDomain: "amozon-clone-3886c.firebaseapp.com",
  projectId: "amozon-clone-3886c",
  storageBucket: "amozon-clone-3886c.appspot.com",
  messagingSenderId: "541220808407",
  appId: "1:541220808407:web:5a6cf8aacc421054a3b292",
  measurementId: "G-GKD8GN4GBX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth, analytics };
