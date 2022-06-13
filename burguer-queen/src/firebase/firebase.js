// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8uwgXqt_B2PgMx8aroOaJukia0xGg40Q",
  authDomain: "burguer-queen-89bc9.firebaseapp.com",
  projectId: "burguer-queen-89bc9",
  storageBucket: "burguer-queen-89bc9.appspot.com",
  messagingSenderId: "707502584135",
  appId: "1:707502584135:web:09a36d273d878924af5c62",
  measurementId: "G-MSTGBB7CTZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);