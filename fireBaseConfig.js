// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: APIKEY,
  authDomain: "re7alreactnative.firebaseapp.com",
  projectId: "re7alreactnative",
  storageBucket: "re7alreactnative.appspot.com",
  messagingSenderId:SENDER ID,
  appId: APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);



