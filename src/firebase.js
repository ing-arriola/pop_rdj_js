import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

 export const firebaseConfig = {
    /*apiKey: "AIzaSyB1RQtpLsOrxkFRqIt99G0QJ3pyda9ecaw",
    authDomain: "pop-rdf.firebaseapp.com",
    databaseURL: "https://pop-rdf-default-rtdb.firebaseio.com",
    projectId: "pop-rdf",
    storageBucket: "pop-rdf.appspot.com",
    messagingSenderId: "623713491893",
    appId: "1:623713491893:web:e2a38a65ad3f0e333ad7fc"*/
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSING_SENDER_IP,
    appId: process.env.REACT_APP_APP_ID
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore;
const auth = firebase.auth();

export { db, auth}