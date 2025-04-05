// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCz-8oBvNqcixHHmIQYhPtt55ow0WxFKQA",
  authDomain: "netflixgpt-c1be9.firebaseapp.com",
  projectId: "netflixgpt-c1be9",
  storageBucket: "netflixgpt-c1be9.firebasestorage.app",
  messagingSenderId: "597447180573",
  appId: "1:597447180573:web:62e696a5ae0e2457b6e1f4",
  measurementId: "G-EYS0ZM2LZC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export  const auth = getAuth();