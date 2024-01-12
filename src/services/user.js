import {
	createUserWithEmailAndPassword, signInWithPopup,
	signOut, signInWithEmailAndPassword, onAuthStateChanged,
	sendPasswordResetEmail
} from 'firebase/auth';
import {
	collection, doc, getDocs, getDoc, addDoc, deleteDoc, updateDoc,
	query, where, orderBy, serverTimestamp, onSnapshot, limit
} from 'firebase/firestore';
import { db, auth, googleProvider } from '../config/firebase';


const usersCollectionRef = collection(db, 'users');


const register = async (name, email, password) => {
	const credentials = await createUserWithEmailAndPassword(auth, email, password).catch(e => console.log(e));

	await addDoc(usersCollectionRef, {
		name,
		email,
		createdAt: serverTimestamp(),
		userId: credentials.user.uid,
	}).catch(e => console.log(e));
};

const login = async (email, password) => {
	const _credentials = await signInWithEmailAndPassword(auth, email, password).catch(e => console.log(e));
};

const loginWithGoogle = async () => {
	const _credentials = await signInWithPopup(auth, googleProvider).catch(e => console.log(e));
};

const resetPassword = async (email) => {
	await sendPasswordResetEmail(auth, email).catch(e => console.log(e));
};

const logout = async () => {
	await signOut(auth).catch(e => console.log(e));
};

const getUserData = async () => {
	if (auth?.currentUser?.uid) {
		const q = query(usersCollectionRef, where("userId", "==", auth.currentUser.uid), limit(1));

		const snapshot = await getDocs(q).catch(e => console.log(e));
		const data = snapshot.docs.map(doc => ({
			...doc.data(),
			id: doc.id,
		}));

		return data[0];
	}
};

const authStateChanged = () => {
	onAuthStateChanged(auth, user => {
		console.log(user);
	});
};

export {
	register,
	login,
	resetPassword,
	logout,
	getUserData,
	loginWithGoogle,
};