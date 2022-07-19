/* eslint-disable no-unused-vars */
// import firebase/app
import 'firebase/app'

// we need to import firebase/firestore
import 'firebase/firestore';

// import initializeApp to initialize app from firebase/app
import { initializeApp } from 'firebase/app';

// neccessary tools from firebase/firestore
import { getFirestore } from 'firebase/firestore';

// config
const firebaseConfig = initializeApp({
    apiKey: "AIzaSyCB4wAmlDWGZ-BumGQjv8u8_VIDgef8qiQ",
    authDomain: "cafe-firestore-aa264.firebaseapp.com",
    databaseURL: "https://cafe-firestore-aa264.firebaseio.com",
    projectId: "cafe-firestore-aa264",
    storageBucket: "cafe-firestore-aa264.appspot.com",
    messagingSenderId: "452856594084",
    appId: "1:452856594084:web:f56bf60e9b6c81200ff031",
    measurementId: "G-DVSD4E58HJ"
})

const fs = getFirestore(firebaseConfig);

export default fs;