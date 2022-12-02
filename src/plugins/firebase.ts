import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAvzNK9K55oBD68tFmWVblV9K6Kgje_e-w",
    authDomain: "na-vue-vite-ts-vuetify.firebaseapp.com",
    projectId: "na-vue-vite-ts-vuetify",
    storageBucket: "na-vue-vite-ts-vuetify.appspot.com",
    messagingSenderId: "567956944461",
    appId: "1:567956944461:web:89b404f29dabfe08c64e04"
};

firebase.initializeApp(firebaseConfig)
const storage = firebase.storage()
const db = firebase.firestore()

export { storage ,db }
