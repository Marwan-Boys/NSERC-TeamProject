import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth';


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBkt_jS0Ig3xV_lmUo6kBeIzFD2H97Qhi4",
    authDomain: "database-9ad06.firebaseapp.com",
    databaseURL: "https://database-9ad06.firebaseio.com",
    projectId: "database-9ad06",
    storageBucket: "database-9ad06.appspot.com",
    messagingSenderId: "994960861327",
    appId: "1:994960861327:web:2a591dfcd70ff4fe8828fa",
    measurementId: "G-PVLSY9RW1F"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.firestore().settings({timestampsInSnapshots: true});
export default firebase;