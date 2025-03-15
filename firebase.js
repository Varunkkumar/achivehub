import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyATh2hZvHR7HlUCvlhS-CFM5pmb-lHvPDU",
  authDomain: "achivement-9326d.firebaseapp.com",
  projectId: "achivement-9326d",
  storageBucket: "achivement-9326d.firebasestorage.app",
  messagingSenderId: "595777597781",
  appId: "1:595777597781:web:cd68f5c0514c3336e47fdc"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
