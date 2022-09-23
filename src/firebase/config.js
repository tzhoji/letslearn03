import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCX0OTqM0thm1BxfRWGY9cq89XuVVYR1no",
  authDomain: "courseletslearn.firebaseapp.com",
  projectId: "courseletslearn",
  storageBucket: "courseletslearn.appspot.com",
  messagingSenderId: "745830851981",
  appId: "1:745830851981:web:e42a91e98aed406d58c9c4"}

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }