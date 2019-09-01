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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
