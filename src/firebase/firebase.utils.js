import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyAv7uwI2kQVhTHH6grkZdsg1sPPJ0aNXpI",
    authDomain: "crwn-db-71ea0.firebaseapp.com",
    databaseURL: "https://crwn-db-71ea0.firebaseio.com",
    projectId: "crwn-db-71ea0",
    storageBucket: "crwn-db-71ea0.appspot.com",
    messagingSenderId: "212314441907",
    appId: "1:212314441907:web:cfc12bbc3188cecfeac8c6"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    
    if(!snapShot.exists) {
        const { displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
        
    }
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider =new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
