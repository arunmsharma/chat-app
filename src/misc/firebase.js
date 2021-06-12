import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyBN5Cn1366uopnkslNRg6N6iNPRHNBKjqg',
  authDomain: 'chat-web-app-25f6f.firebaseapp.com',
  projectId: 'chat-web-app-25f6f',
  storageBucket: 'chat-web-app-25f6f.appspot.com',
  messagingSenderId: '8293866576',
  appId: '1:8293866576:web:f485fd80d9376454234555',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
