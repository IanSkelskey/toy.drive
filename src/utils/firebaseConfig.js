import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyDls9VjIJE_9zlbWauRRgyZF6BaHi6fqQ4',
    authDomain: 'holiday-toy-drive.firebaseapp.com',
    projectId: 'holiday-toy-drive',
    storageBucket: 'holiday-toy-drive.appspot.com',
    messagingSenderId: '255711987232',
    appId: '1:255711987232:web:f4f3a19db3af03da2e9e45',
    measurementId: 'G-YVR6HNRWL3',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
