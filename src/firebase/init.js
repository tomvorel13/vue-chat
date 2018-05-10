import firebase from 'firebase'
import firestore from 'firebase/firestore'

var config = {
  apiKey: 'AIzaSyAQ0e79yRgrqg1bNTxACZ7MgRa5nPZcX5w',
  authDomain: 'ninja-chat-facc7.firebaseapp.com',
  databaseURL: 'https://ninja-chat-facc7.firebaseio.com',
  projectId: 'ninja-chat-facc7',
  storageBucket: 'ninja-chat-facc7.appspot.com',
  messagingSenderId: '770838899154'
}

const firebaseApp = firebase.initializeApp(config)
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()
