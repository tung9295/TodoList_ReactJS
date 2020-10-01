import firebase from 'firebase';

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_DATABASE_URL,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID
  apiKey: "AIzaSyAO8foEL1VNjPRtkJH32H_k3ns98TQ3Aws",
    authDomain: "todolist-8be3b.firebaseapp.com",
    databaseURL: "https://todolist-8be3b.firebaseio.com",
    projectId: "todolist-8be3b",
    storageBucket: "todolist-8be3b.appspot.com",
    messagingSenderId: "875113209408",
    appId: "1:875113209408:web:000c03be79b1db830b89a5"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.database();