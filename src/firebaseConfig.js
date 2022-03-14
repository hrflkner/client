// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyBISQNRx8efmaURdHRyuAL8H7pcGFA7LD8',
    authDomain: 'mynetwork-e67aa.firebaseapp.com',
    projectId: 'mynetwork-e67aa',
    storageBucket: 'mynetwork-e67aa.appspot.com',
    messagingSenderId: '1095859365642',
    appId: '1:1095859365642:web:ace1efaea0641f30453cf3',
    measurementId: 'G-QKSRP3SCBB',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
