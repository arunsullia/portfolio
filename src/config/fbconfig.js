import firebase from "";

var firebaseConfig = {
    apiKey: "AIzaSyDNAzOHXMzj_AH3g_QOZJTsnR8LTTeDUBw",
    authDomain: "portfolio-b82d2.firebaseapp.com",
    projectId: "portfolio-b82d2",
    storageBucket: "portfolio-b82d2.appspot.com",
    messagingSenderId: "362615645796",
    appId: "1:362615645796:web:7b6ba2ef4db14a52312171"
  };
  // Initialize Firebase
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  export default db;