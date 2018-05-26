import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDDkElEVrS9EuuiRkj6upcShTl514MmOW8",
  authDomain: "expensify-52358.firebaseapp.com",
  databaseURL: "https://expensify-52358.firebaseio.com",
  projectId: "expensify-52358",
  storageBucket: "expensify-52358.appspot.com",
  messagingSenderId: "1066250522497"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref().set({
//   name: 'Kelemen Marton',
//   age: 25,
//   isSingle: true,
//   location: {
//     city: 'Nemesvámos',
//     country: 'United States'
//   }
// }).then(() => {
//
// }).catch((error) => {
//   console.log(error);
// });
//
// database.ref('age').set(27);
// database.ref('location/city').set('Veszprém');
//
// database.ref('isSingle').remove()
// .then(() => console.log('Data removed'))
// .catch(() => console.log('Dind not remove'));
//
// database.ref().update({
//   name: 'Mike',
//   age: 29,
//   job: 'software developer',
//   'location/country': 'Hungary'
// });
//
// database.ref().once('value')
// .then((snapshot) => {
//   const val = snapshot.val();
//   console.log(val);
// })
// .catch((error) => {
//   console.log('Error', error);
// });
//
// database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// });
//
// setTimeout(() => {
//   database.ref('name').set('Marci');
// }, 3500);
//
// setTimeout(() => {
//   database.ref().off();
// }, 7000);
//
// setTimeout(() => {
//   database.ref('name').set('Marton');
// }, 10500);
//
// const firebaseNotes = {
//   notes: {
//     asd: {
//      title: 'asd',
//      body: 'notes'
//     }
//   }
// };
//
// database.ref('notes').push({
//   title: 'todo',
//   body: 'go for run'
// });