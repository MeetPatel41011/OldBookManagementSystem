import { initializeApp } from "firebase/app";
//import { getAnalytics } from "./firebase";
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBCW8_qX3gcEAcflbjDYFjL1t1hcGQNH18",
  authDomain: "oldbookmanagementsystem.firebaseapp.com",
  projectId: "oldbookmanagementsystem",
  storageBucket: "oldbookmanagementsystem.appspot.com",
  messagingSenderId: "553141229854",
  appId: "1:553141229854:web:2c00a298bc26cd114a510f",
  measurementId: "G-X615X8NBJ2",

  // appId: "1:553141229854:web:3e2f0585b0e0341a4a510f",
  // measurementId: "G-YMZFDFYW22",
};

// Initialize Firebase


const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
//const analytics = getAnalytics(app);
export const storage = getStorage(app)