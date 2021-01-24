import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/analytics';
import { configureStore } from './store';
import App from './App';
import { theme } from './theme';
import './index.css';

const firebaseConfig = {
  apiKey: 'AIzaSyAEeNKM-9EocDf_vYK6rsdd27t7DKYRf04',
  authDomain: 'pr-mebel-588df.firebaseapp.com',
  databaseURL: 'https://pr-mebel-588df.firebaseio.com',
  projectId: 'pr-mebel-588df',
  storageBucket: 'pr-mebel-588df.appspot.com',
  messagingSenderId: '1062373858201',
  appId: '1:1062373858201:web:fb4168726839dea15e9108',
  measurementId: 'G-YF3V9BR0G9',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <Router>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
