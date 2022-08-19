// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import "firebase/auth"
import { getAuth} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyC5nAu2KxeQrgRtzyv_sRKztIsmxf-yB7s",
    authDomain: "twitter-ea342.firebaseapp.com",
    projectId: "twitter-ea342",
    storageBucket: "twitter-ea342.appspot.com",
    messagingSenderId: "757557540101",
    appId: "1:757557540101:web:f56bcc81493894979eb36c"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) :  firebase.app()
const db = app.firestore();
const auth = getAuth()
const provider = new GoogleAuthProvider()
export {db , auth, provider };