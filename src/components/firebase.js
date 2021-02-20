import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBikHXWE-5MzeQfi4ZeQtru3u884q4dufE",
  authDomain: "trip-planner-fbba2.firebaseapp.com",
  projectId: "trip-planner-fbba2",
  storageBucket: "trip-planner-fbba2.appspot.com",
  messagingSenderId: "155341515013",
  appId: "1:155341515013:web:29f0c29d913da4b4fdaf6c",
  measurementId: "G-X4RC0FFEBM"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const db = firebaseApp.firestore();
export {auth,db};