import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCjLznmqvDx4IMCk3-kxNYvZ0mvV15wUzE",
  authDomain: "secondmind-test-d15cd.firebaseapp.com",
  projectId: "secondmind-test-d15cd",
  storageBucket: "secondmind-test-d15cd.appspot.com",
  messagingSenderId: "803425257513",
  appId: "1:803425257513:web:f593e9cb848ba289607438",
  measurementId: "G-73ZBYC4KFB"

};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
export { db, storage };
