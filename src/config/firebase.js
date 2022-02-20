import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const config = {
	apiKey: "AIzaSyC0deOcINGW23vBaUps_2SiA01VrwsVTBM",
	authDomain: "dione-original.firebaseapp.com",
	projectId: "dione-original",
	storageBucket: "dione-original.appspot.com",
	messagingSenderId: "844358461999",
	appId: "1:844358461999:web:171855500643260492f4da"
};




firebase.initializeApp(config)

const auth = firebase.auth();

export { firebase, auth }