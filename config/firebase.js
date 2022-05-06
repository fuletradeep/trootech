import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCabicmyc2mcbqusDWDzaIQnmDyUQahpZk",
  authDomain: "deepinterviewdemo.firebaseapp.com",
  projectId: "deepinterviewdemo",
  storageBucket: "deepinterviewdemo.appspot.com",
  messagingSenderId: "81872013532",
  appId: "1:81872013532:web:1279f21178fc0c93f10c19",
  measurementId: "G-6WLFJ4RMQ6"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
console.log(firebaseApp);
export default {firebaseApp}