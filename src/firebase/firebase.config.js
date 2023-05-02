// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDZFo8KndOtF-Q7vLrW2Lcm38GrrrBsJMo',
	authDomain: 'the-chef-world.firebaseapp.com',
	projectId: 'the-chef-world',
	storageBucket: 'the-chef-world.appspot.com',
	messagingSenderId: '163146539843',
	appId: '1:163146539843:web:4f29729606136ae91745f6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;