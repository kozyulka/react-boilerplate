import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCqhLyamxTJaAXgQ38olr4Rsg_BGoFKeNc",
    authDomain: "dasha-test-todo-app.firebaseapp.com",
    databaseURL: "https://dasha-test-todo-app.firebaseio.com",
    projectId: "dasha-test-todo-app",
    storageBucket: "dasha-test-todo-app.appspot.com",
    messagingSenderId: "22402199191"
};
firebase.initializeApp(config);

firebase.database().ref().set({
    app: {
        name: 'Todo App',
        version: '1.1.2'
    },
    isRunning: true,
    user: {
        name: 'Dasha',
        age: 24
    }
}).then(() => {
    console.log('Set worked');
}, (er) => {
    console.log(er);
});

// //posleduyuwiy vizov set() udalit vsyu prediduwuyu database, naprimer:
// // firebase.database().ref().set({
// //     appName: 'Todo Application'
// // });  //v base ostanetysa tolko etot ob'ekt,a ves prediduwiy udalitsya
//
// //4tobi eto izbejat,nujno individualno ukazat sv-vo,kotoroe xotim ustanovit, s pomw'yu metoda child(), v kotorom i ukajem sv-vo strokoy:
//
// firebase.database().ref().child('user').set({
//     name: 'Masha'
// });


// firebase.database().ref().update({
//     'app/name': 'Todo Application',
//     'user/name': 'Masha'
// });

// firebase.database().ref().child('app').update({
//     name: 'Todo Application'
// });
//
// firebase.database().ref().child('user').update({
//     name: 'Kostya'
// });

// firebase.database().ref().update({
//     isRunning: null
// });
//
// firebase.database().ref().child('user/name').remove();

// firebase.database().ref().once('value').then((snapshot) => {
//     console.log('Fetching worked', snapshot.val());
// }, (e) => {
//     console.log(e);
// });

// let logData = (snapshot) => {
//     console.log('Got value though on', snapshot.val());
// };
// firebase.database().ref().on('value', logData);
//
// firebase.database().ref().update({ isRunning: false });
// firebase.database().ref().child('user').update({ name: 'Olya' });
//
// firebase.database().ref().child('user').on('value', (snapshot) => {
//     console.log('Got value in user object', snapshot.val());
// });
//
// firebase.database().ref().child('user').update({ name: 'Olya' });
// firebase.database().ref().child('app').update({ name: 'Weather app' });
//
// let todosRef = firebase.database().ref().child('todos');
//
//
// todosRef.on('child_added', (snapshot) => {
//     console.log('child_added', snapshot.key, snapshot.val());
// });
//
// todosRef.push({
//     text: 'walk the dog'
// });
//
// todosRef.push({
//     text: 'clean the room'
// });
//
