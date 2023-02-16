import { initializeApp } from "firebase/app"
import { getFirestore } from "@firebase/firestore"


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig 
= {
    apiKey: "AIzaSyDqLQhzFF4GQrBsWrq1QbdAce3-FjBSSAY",
    authDomain: "pheonix-b7e07.firebaseapp.com",
    projectId: "pheonix-b7e07",
    storageBucket: "pheonix-b7e07.appspot.com",
    messagingSenderId: "563423771797",
    appId: "1:563423771797:web:efe03a6088cc64e625af9c",
    measurementId: "G-G38VMJS9L9"
};

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)