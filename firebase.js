

import { getStorage } from "firebase/storage";

import { getAnalytics } from "firebase/analytics";
  import {getFirestore,query,getDocs,
      collection, where, 
      addDoc,
   } from "firebase/firestore";
   import { initializeApp, getApps, getApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmWx87NVIo6waHoemR0bTa9H8yFGxdq9g",
  authDomain: "instanext-clone.firebaseapp.com",
  projectId: "instanext-clone",
  storageBucket: "instanext-clone.appspot.com",
  messagingSenderId: "54241878225",
  appId: "1:54241878225:web:8e675b6130da9137bce5f0",
  measurementId: "G-4S7MC3QY5B"
};

// Initialize Firebase
// const analytics = getAnalytics(app);


//initialize
const app = !getApps().length ? initializeApp(firebaseConfig): getApp();
const db= getFirestore(app);
const storage = getStorage();

export { app, db, storage};