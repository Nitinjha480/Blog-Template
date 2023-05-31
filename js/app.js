const firebaseConfig = {
    apiKey: "AIzaSyBLzJ-P1liWbdACNFa5f0N_RWhPepNpAKw",
    authDomain: "blogtemplate-8f3ba.firebaseapp.com",
    databaseURL: "https://blogtemplate-8f3ba-default-rtdb.firebaseio.com",
    projectId: "blogtemplate-8f3ba",
    storageBucket: "blogtemplate-8f3ba.appspot.com",
    messagingSenderId: "138040623008",
    appId: "1:138040623008:web:e03c531e2b3c0952eceec5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();
const storage = firebase.storage();

// db.collection("technology").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//         console.log(doc.id);
//         console.log(doc.data());
//     });
// });