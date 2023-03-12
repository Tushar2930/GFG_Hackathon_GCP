// const firebase=require('firebase');

// const firebaseConfig = {
//     apiKey: "AIzaSyCeQ_f3zOpkptFTCmXXgt2ve4-efXGZkYA",
//     authDomain: "gfg-hackathon-42b93.firebaseapp.com",
//     projectId: "gfg-hackathon-42b93",
//     storageBucket: "gfg-hackathon-42b93.appspot.com",
//     messagingSenderId: "133107254504",
//     appId: "1:133107254504:web:3a8ec32076471da619b55d",
//     measurementId: "G-N6HNY7FCM9"
//   };

//   firebase.intializeApp(firebaseConfig);
//   const db=firebase.firestore();
//   module.exports=db;



var admin = require("firebase-admin");

var serviceAccount = require("./sevice-key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db=admin.firestore();
module.exports=db;
