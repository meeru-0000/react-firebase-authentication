import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDOfw0wjCkfojC02Nmk0IGU_455iUfvTp8",

  authDomain: "getsasta-f23f2.firebaseapp.com",

  projectId: "getsasta-f23f2",

  storageBucket: "getsasta-f23f2.appspot.com",

  messagingSenderId: "953226231623",

  appId: "1:953226231623:web:eedb2dad4b587504609662",

  measurementId: "G-VJ46PEW6KF"


};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
