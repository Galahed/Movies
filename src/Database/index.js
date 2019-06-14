import firebase from 'firebase/firebase';
import config from './firebaseConfig';

firebase.initializeApp(config);

firebase.firestore().settings({});

export default firebase;