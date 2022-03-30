// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYbdtyqguT7-uzLEahWllSdBxtTTltac8",
  authDomain: "todo-auth-8590c.firebaseapp.com",
  projectId: "todo-auth-8590c",
  storageBucket: "todo-auth-8590c.appspot.com",
  messagingSenderId: "376835114075",
  appId: "1:376835114075:web:42ee159347564d3501ab7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export {auth}