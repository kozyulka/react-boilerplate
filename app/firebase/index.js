import firebase from 'firebase';

try {
    const config = {
        apiKey: "AIzaSyCqhLyamxTJaAXgQ38olr4Rsg_BGoFKeNc",
        authDomain: "dasha-test-todo-app.firebaseapp.com",
        databaseURL: "https://dasha-test-todo-app.firebaseio.com",
        projectId: "dasha-test-todo-app",
        storageBucket: "dasha-test-todo-app.appspot.com",
        messagingSenderId: "22402199191"
    };

    firebase.initializeApp(config);
} catch (e) {

}

export const firebaseRef = firebase.database().ref();
export default firebase;