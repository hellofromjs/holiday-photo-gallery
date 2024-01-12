import {
	collection, doc, getDocs, getDoc, addDoc, deleteDoc, updateDoc,
	query, where, orderBy, serverTimestamp, onSnapshot, limit
} from 'firebase/firestore';
import { db, auth } from '../config/firebase';


const photosCollectionRef = collection(db, 'photos');


const deletePhoto = async (id) => {
	const workDocRef = doc(photosCollectionRef, id);

	await deleteDoc(workDocRef).catch(e => console.log(e));
};

const getAllPhotosSubscribed = async (onPhotosCollectionChanged) => {

	onSnapshot(photosCollectionRef, snapshot => {
		const data = snapshot.docs.map(doc => ({
			...doc.data(),
			id: doc.id,
		}));

		onPhotosCollectionChanged(data);
	});
};

const addPhoto = async (url) => {
	if (auth?.currentUser?.uid) {
		await addDoc(photosCollectionRef, {
			url,
			createdAt: serverTimestamp(),
			userId: auth.currentUser.uid,
		}).catch(e => console.log(e));
	}
};

export {
	deletePhoto,
	getAllPhotosSubscribed,
	addPhoto,
};