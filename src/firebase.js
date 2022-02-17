//import firebase from "firebase/compat";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDyvFutlC6yluzGhaYFJcO7Pzcv_s7y8Ko",
    authDomain: "first-e20d0.firebaseapp.com",
    projectId: "first-e20d0",
    storageBucket: "first-e20d0.appspot.com",
    messagingSenderId: "139358473032",
    appId: "1:139358473032:web:b88b7e1b2c7030a781017d",
    measurementId: "G-DD1YSXR2XQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {db, auth}