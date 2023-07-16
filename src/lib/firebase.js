import { dev } from '$app/environment';
import { initializeApp } from 'firebase/app';
import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import {
	PUBLIC_FIREBASE_API_KEY,
	PUBLIC_FIREBASE_AUTH_DOMAIN,
	PUBLIC_FIREBASE_PROJECT_ID,
	PUBLIC_FIREBASE_STORAGE_BUCKET,
	PUBLIC_FIREBASE_MESSAGE_SENDER_ID,
	PUBLIC_FIREBASE_APP_ID
} from '$env/static/public';

const firebaseConfig = {
	apiKey: PUBLIC_FIREBASE_API_KEY,
	authDomain: PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: PUBLIC_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: PUBLIC_FIREBASE_MESSAGE_SENDER_ID,
	appId: PUBLIC_FIREBASE_APP_ID
};

export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const storage = getStorage(app);

async function addFileToFirestore(data) {
	const path = `photos/${data.name}`;
	const photosRef = ref(storage, path);
	const doc = await uploadBytes(photosRef, data);
	return doc.ref;
}

export async function getUrls() {
	const ref = collection(firestore, 'images');
	const documentSnapshots = await getDocs(ref);
	const urls = documentSnapshots.docs.map((doc) => doc.data().url);
	return urls;
}

export async function uploadFile(image) {
	const ref = await addFileToFirestore(image);
	const url = await getDownloadURL(ref);
	const dbRef = await addDoc(collection(firestore, 'images'), {
		url: url
	});
	console.log(url);
	console.log(dbRef.id);
}
