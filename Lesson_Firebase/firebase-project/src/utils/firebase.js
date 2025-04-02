import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDjhYK0bX0v8mj8NcnMgkh9seRyJDph2JI",
    authDomain: "fullstack-822ca.firebaseapp.com",
    projectId: "fullstack-822ca",
    storageBucket: "fullstack-822ca.firebasestorage.app",
    messagingSenderId: "229340354811",
    appId: "1:229340354811:web:379af4504bd7f616e5b85e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
