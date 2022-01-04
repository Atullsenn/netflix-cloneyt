import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCA3a2pXWzwnoNtbQQF074IGT4sDrf0Lys",
    authDomain: "netflix-clone-y-e19ff.firebaseapp.com",
    projectId: "netflix-clone-y-e19ff",
    storageBucket: "netflix-clone-y-e19ff.appspot.com",
    messagingSenderId: "757146104775",
    appId: "1:757146104775:web:30f037c61cfa9b58e51fe2"
  };

  firebase.initializeApp(firebaseConfig);
  
  const auth = firebase.auth();

  export { auth }
  export default firebase
  

