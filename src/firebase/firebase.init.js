// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCIOYz9pxmCxjOKpDHbcTqXZRaUEAWgrP4",
    authDomain: "educational-assignment.firebaseapp.com",
    projectId: "educational-assignment",
    storageBucket: "educational-assignment.appspot.com",
    messagingSenderId: "176390615445",
    appId: "1:176390615445:web:2be8786671a59c96edc69c"
};

// Initialize Firebase
const app = initializeApp( firebaseConfig );

export default app;
