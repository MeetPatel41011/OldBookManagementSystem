import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage";

import firebase from "./firebase";
import "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBCW8_qX3gcEAcflbjDYFjL1t1hcGQNH18",
  authDomain: "oldbookmanagementsystem.firebaseapp.com",
  projectId: "oldbookmanagementsystem",
  storageBucket: "oldbookmanagementsystem.appspot.com",
  messagingSenderId: "553141229854",
  appId: "1:553141229854:web:2c00a298bc26cd114a510f",
  measurementId: "G-X615X8NBJ2",
};

export const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const storage = getStorage(app);
const db = getFirestore(app);

export { db };
//const analytics = getAnalytics(app);

