import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
    apiKey: "AIzaSyAvbl61eMsZp4TkPlrmfHuIqtE-0CKmoOM",
    authDomain: "tlcn2022-986df.firebaseapp.com",
    projectId: "tlcn2022-986df",
    storageBucket: "tlcn2022-986df.appspot.com",
    messagingSenderId: "9933056731",
    appId: "1:9933056731:web:2902d56aa8a99705917afe"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);