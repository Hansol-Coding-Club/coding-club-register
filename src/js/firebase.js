import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyCVkn0XxI5LbpthLryvmac3_KbqvdjWuVk",
    authDomain: "coding-club-881fe.firebaseapp.com",
    projectId: "coding-club-881fe",
    storageBucket: "coding-club-881fe.appspot.com",
    messagingSenderId: "198607581149",
    appId: "1:198607581149:web:580cacf9fe2b502e029034",
    measurementId: "G-7LW1T6B8F6"
};


const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };