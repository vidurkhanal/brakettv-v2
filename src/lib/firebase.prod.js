import Firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCaR4LyEftj7Tk01RiDxOdRpP9nxQs055Y",
  authDomain: "brakettv1.firebaseapp.com",
  databaseURL: "https://brakettv1.firebaseio.com",
  projectId: "brakettv1",
  storageBucket: "brakettv1.appspot.com",
  messagingSenderId: "324050985199",
  appId: "1:324050985199:web:1580beec68d049807f3b1a",
  measurementId: "G-EQVFGRLXVF",
};
const firebase = Firebase.initializeApp(config);

export { firebase };
