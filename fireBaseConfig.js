// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwtqUql6IwRAGT-0mY_hyDZchznvlmhZU",
  authDomain: "re7alreactnative.firebaseapp.com",
  projectId: "re7alreactnative",
  storageBucket: "re7alreactnative.appspot.com",
  messagingSenderId: "314912263277",
  appId: "1:314912263277:web:0129576db22647b1790364"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);



