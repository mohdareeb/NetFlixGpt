// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_ZqVyf2yS99en09cOCS-6i-40W_s_9L4",
  authDomain: "netflixgpt-3af00.firebaseapp.com",
  projectId: "netflixgpt-3af00",
  storageBucket: "netflixgpt-3af00.appspot.com",
  messagingSenderId: "62011633330",
  appId: "1:62011633330:web:530889cc2faf6fbab723ab",
  measurementId: "G-Q2VVSLV31N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth ;