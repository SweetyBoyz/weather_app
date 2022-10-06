import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwr_zFWfbec8ZKmWY4a4y1Dvzc264Xen8",
  authDomain: "weather-app-fd2e8.firebaseapp.com",
  projectId: "weather-app-fd2e8",
  storageBucket: "weather-app-fd2e8.appspot.com",
  messagingSenderId: "292271529661",
  appId: "1:292271529661:web:5478287d29909f8b9c61d4"
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };