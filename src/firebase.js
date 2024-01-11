import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyA9dKCxkjoQqkTH1ayARhj9mb74JB1P6cc",
	authDomain: "holiday-project-3db04.firebaseapp.com",
	projectId: "holiday-project-3db04",
	storageBucket: "holiday-project-3db04.appspot.com",
	messagingSenderId: "870641817239",
	appId: "1:870641817239:web:578f9ab284b9cad5e37bd2"
  };

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default firebase;

export {
	app
}