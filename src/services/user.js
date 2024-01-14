import {
	createUserWithEmailAndPassword, signInWithPopup,
	signOut, signInWithEmailAndPassword, onAuthStateChanged,
	sendPasswordResetEmail
} from 'firebase/auth';
import {
	collection, doc, getDocs, getDoc, addDoc, deleteDoc, updateDoc,
	query, where, orderBy, serverTimestamp, onSnapshot, limit, getCountFromServer
} from 'firebase/firestore';
import { db, auth, googleProvider } from '../config/firebase';


const usersCollectionRef = collection(db, 'users');


const createUser = async (name, email, userId) => {
	await addDoc(usersCollectionRef, {
		name,
		email,
		userId: userId,
		createdAt: serverTimestamp(),
	}).catch(e => console.log(e));
};

const isUserRegistered = async (userId) => {
	const usersCount = await getCountFromServer(query(
		usersCollectionRef, where('userId', '==', userId)
	));

	return !!usersCount.data().count;
};

const register = async (name, email, password) => {
	try {
		const credential = await createUserWithEmailAndPassword(auth, email, password).catch(e => console.log(e));
		await createUser(name, email, credential.user.uid);
	} catch (e) {
		return { error: { message: e.message } };
	}
};

const login = async (email, password) => {
	try {
		const _credential = await signInWithEmailAndPassword(auth, email, password);
	} catch (e) {
		return { error: { message: e.message } };
	}
};

const loginWithGoogle = async () => {
	const credential = await signInWithPopup(auth, googleProvider).catch(e => console.log(e));
	const user = credential.user;

	if (user !== null) {
		const isRegistered = await isUserRegistered(user.uid);

		if (isRegistered == false) {
			await createUser(user.displayName, user.email, user.uid);
		}
	}
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