// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGTk2xaqiJYxiK6yFLDXL53scEAs6-tDU",
  authDomain: "auth-oftd23a.firebaseapp.com",
  projectId: "auth-oftd23a",
  storageBucket: "auth-oftd23a.appspot.com",
  messagingSenderId: "784637189526",
  appId: "1:784637189526:web:9aae9173904b920e2911b7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
