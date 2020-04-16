import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: "AIzaSyCsFKJOBjCW6zkxoLr4znI84YK0JS8lnRI",
	authDomain: "ecom-site-db.firebaseapp.com",
	databaseURL: "https://ecom-site-db.firebaseio.com",
	projectId: "ecom-site-db",
	storageBucket: "",
	messagingSenderId: "630950582343",
	appId: "1:630950582343:web:351d0d684b92fae7"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	if(!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			})
		}
		catch (error) {
			console.log('error creating user', error.message);
		}
	}

	return userRef;
};

// eslint-disable-next-line
export const addCollectionAndDocuments = async (collectionKey, documentsToAdd) => {
	const collectionRef = firestore.collection(collectionKey);

	const batch = firestore.batch();
	documentsToAdd.forEach(doc => {
		const newDocumentRef = collectionRef.doc();
		batch.set(newDocumentRef, doc);
	});

	return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
	const transformedCollection = collections.docs.map(doc => {
		const { title, items } = doc.data();

		return {
			routeName: encodeURI(title.toLowerCase()),
			id: doc.id,
			title,
			items
		}
	});

	return transformedCollection.reduce((accumulator, collection) => {
		accumulator[collection.title.toLowerCase()] = collection;
		return accumulator;
	}, {})
};

firebase.initializeApp(config);

// Simulate a non firebase BE that requires promise implementation
export const getCurrentUser = () => {
	return new Promise((resolve, reject) => {
		const unsubscribe = auth.onAuthStateChanged(userAuth => {
			unsubscribe();
			resolve(userAuth);
		}, reject)
	});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
