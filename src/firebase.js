import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCHc12kLuB_XjZrgboJQiY2-3HjB2U4XOQ",
    authDomain: "puppylove-900ad.firebaseapp.com",
    databaseURL: "https://puppylove-900ad.firebaseio.com",
    projectId: "puppylove-900ad",
    storageBucket: "puppylove-900ad.appspot.com",
    messagingSenderId: "467199925812",
    appId: "1:467199925812:web:7f4d76198d4abbabbd7461",
    measurementId: "G-BJ6H5FF43W"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;

  