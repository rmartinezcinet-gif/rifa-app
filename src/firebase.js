// Configuración Firebase (reemplazar con la real)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "TU_APIKEY",
  authDomain: "TU_AUTHDOMAIN",
  projectId: "TU_PROJECTID",
  storageBucket: "TU_STORAGEBUCKET",
  messagingSenderId: "TU_MSGID",
  appId: "TU_APPID"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
