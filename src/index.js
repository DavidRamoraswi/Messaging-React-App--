import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import store from './store';

const firebaseConfig = {
  apiKey: "AIzaSyBtDoTNtHFN2Qs4OneoKVNfbXp9VHOxzQE",
  authDomain: "messenger-app-3d4d7.firebaseapp.com",
  projectId: "messenger-app-3d4d7",
  storageBucket: "messenger-app-3d4d7.appspot.com",
  messagingSenderId: "273716638666",
  appId: "1:273716638666:web:f03273b553bd0ce9685533",
  measurementId: "G-J3THQVC0R4"
};

firebase.initializeApp(firebaseConfig);

window.store = store;

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
