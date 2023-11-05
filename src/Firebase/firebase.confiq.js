// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFW1BsjvgbbopYFqwgn4SdfTDOS7KAwZM",
  authDomain: "study-assignment-f59be.firebaseapp.com",
  projectId: "study-assignment-f59be",
  storageBucket: "study-assignment-f59be.appspot.com",
  messagingSenderId: "516652097606",
  appId: "1:516652097606:web:9166e67afa47dd85722a47",
  measurementId: "G-24M801HFZ1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;
