// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpH44Kbn36smspOzacLZioffsqt0Hr3Yg",
  authDomain: "netflixweb-1acaa.firebaseapp.com",
  projectId: "netflixweb-1acaa",
  storageBucket: "netflixweb-1acaa.firebasestorage.app",
  messagingSenderId: "75506899770",
  appId: "1:75506899770:web:a1f0f41621a000732a4e03",
  measurementId: "G-9XMKPW0MFS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// const auth = getAuth(app);
// export {auth};

export  const auth = getAuth();
