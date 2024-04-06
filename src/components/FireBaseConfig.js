import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQ_XCKHHqxFm4yesvgfjHdzlniD0Uay2E",
  authDomain: "studenttutor-2b58b.firebaseapp.com",
  projectId: "studenttutor-2b58b",
  storageBucket: "studenttutor-2b58b.appspot.com",
  messagingSenderId: "799329960112",
  appId: "1:799329960112:web:bbaabf8f5e34320a99fb75",
  measurementId: "G-52ZQKJD3VG"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const database=getAuth(app)






// Initialize Firebase app
