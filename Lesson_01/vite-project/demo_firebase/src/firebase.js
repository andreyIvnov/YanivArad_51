import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDqpP7lEg4dImeqZaORxYbGwJL2umqoK8Y',
  authDomain: 'fullstack-d231d.firebaseapp.com',
  projectId: 'fullstack-d231d',
  storageBucket: 'fullstack-d231d.firebasestorage.app',
  messagingSenderId: '467784668605',
  appId: '1:467784668605:web:46f83d25ea245b8cfe6ed4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
