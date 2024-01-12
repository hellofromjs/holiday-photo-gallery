import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
	apiKey: "AIzaSyA9dKCxkjoQqkTH1ayARhj9mb74JB1P6cc",
	authDomain: "holiday-project-3db04.firebaseapp.com",
	projectId: "holiday-project-3db04",
	storageBucket: "holiday-project-3db04.appspot.com",
	messagingSenderId: "870641817239",
	appId: "1:870641817239:web:578f9ab284b9cad5e37bd2"
};

const app = initializeApp(firebaseConfig);

// init firebase services
export const db = getFirestore(app);
export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();