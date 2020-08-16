import firebase from 'firebase';
import 'firebase/firestore';
import { gql } from '@apollo/client';
import { batchSize } from '__constants__';
import { client } from './client';
import { getCollectionName } from './getCollectionName';

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

const db = firebase.firestore();

export const fetchCatalogByFilter = ({ section, style, doorType }, page) => client.query({
  query: gql`
    {
      ${getCollectionName(section)}(where: {
        ${style !== 'any' ? `${style}: true` : ''}
        ${doorType !== 'any' ? `${doorType}: true` : ''}
      }, order: [id_ASC], limit: ${batchSize}, skip: ${batchSize * page}){
        total
        items {
          id
          collection
          description
          imageFull: image {
            url(transform: {
              format: JPG_PROGRESSIVE
            })
          }
          imageMedium: image {
            url(transform: {
              width: 750
              height: 500
              format: JPG_PROGRESSIVE
            })
          }
          imageMinified: image {
            url(transform: {
              width: 435
              height: 290
              format: JPG_PROGRESSIVE
            })
          }
          sys {
            id
          }
        }
      }
    }
  `,
});

export const sendMessage = (content) => {
  db.collection('messages').add(content)
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
};
