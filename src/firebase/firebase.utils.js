import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAVq2HnBy6IxdgZGAoQVKzgWiZLnliJScc",
    authDomain: "crwn-db-ee335.firebaseapp.com",
    projectId: "crwn-db-ee335",
    storageBucket: "crwn-db-ee335.appspot.com",
    messagingSenderId: "1017767013769",
    appId: "1:1017767013769:web:adc160af98cc3cfe648558",
    measurementId: "G-B42XH8MFK6"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

