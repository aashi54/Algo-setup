import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD6AXMVEg2vY3epqrgClc55d8lXs5Qyo1k",
  authDomain: "algoproject-9cb44.firebaseapp.com",
  projectId: "algoproject-9cb44",
  storageBucket: "algoproject-9cb44.appspot.com",
  messagingSenderId: "903349041296",
  appId: "1:903349041296:web:2d72b8b11fe7e45c1a0015",

};

const app = initializeApp(firebaseConfig);
export const auth = getAuth()
