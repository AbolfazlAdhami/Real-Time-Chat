// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyCe-Vj57Muitw7oaC2fQsSqR4Tft6XH-po",
  authDomain: "real-time-chat-ea623.firebaseapp.com",
  projectId: "real-time-chat-ea623",
  storageBucket: "real-time-chat-ea623.appspot.com",
  messagingSenderId: "949219377917",
  appId: "1:949219377917:web:4f2b4619c898e9f09f7494",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db=getFirestore()