// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAN6xa0Y1WZETRnvclecjkaZUChlkyKyNA",
  authDomain: "teacher-ana.firebaseapp.com",
  projectId: "teacher-ana",
  storageBucket: "teacher-ana.appspot.com",
  messagingSenderId: "672039196800",
  appId: "1:672039196800:web:fa2d4cf4c12e2235a02e65",
  measurementId: "G-ZYXDES2Z61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;