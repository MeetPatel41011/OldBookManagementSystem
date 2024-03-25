import { initializeApp } from "firebase/app";
//import { getAnalytics } from "./firebase";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const otherProjectFirebaseConfig = {
  apiKey: "AIzaSyApsaagSJgTtReHeOUKfaON4IMQte109Kw",
  authDomain: "obms-sellers-5b932.firebaseapp.com",
  projectId: "obms-sellers-5b932",
  storageBucket: "obms-sellers-5b932.appspot.com",
  messagingSenderId: "475101512953",
  appId: "1:475101512953:web:94275531019c0f908d8e28",
  measurementId: "G-1DEXMEQ57V",
};

// Initialize Firebase

// const app = initializeApp(firebaseConfig);
var sellerProject = initializeApp(otherProjectFirebaseConfig, "other");
export const authentication = getAuth(sellerProject);
//const analytics = getAnalytics(app);
export const storage = getStorage(sellerProject);