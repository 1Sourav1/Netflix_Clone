import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA9Z_q6RuyL-rxZUa72rIcgySNvO_Q2v5M",
    authDomain: "netflix-clone-4c208.firebaseapp.com",
    projectId: "netflix-clone-4c208",
    storageBucket: "netflix-clone-4c208.appspot.com",
    messagingSenderId: "178768483632",
    appId: "1:178768483632:web:35b33c81bcbef11fdf64f5"
  };

  export const firebase=initializeApp(firebaseConfig);
  const db= getFirestore();
  const auth=getAuth(firebase);

  export{auth}
  export default db;