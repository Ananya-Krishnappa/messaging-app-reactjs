import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; // for authentication
import 'firebase/compat/storage'; // for storage
import 'firebase/compat/database'; // for realtime database
import 'firebase/compat/firestore'; // for cloud firestore
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBdas21Q_jqUtMfLUQhbZ8Xv-bwXRMEbSw",
    authDomain: "messaging-app-mern-44e34.firebaseapp.com",
    projectId: "messaging-app-mern-44e34",
    storageBucket: "messaging-app-mern-44e34.appspot.com",
    messagingSenderId: "160348620156",
    appId: "1:160348620156:web:dda1cc6f5d53b223a310f9",
    measurementId: "G-DLSD06W983"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;