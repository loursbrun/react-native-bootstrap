import * as firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDXmBEJTZgoDR9wcFAZSVjiv1SCOKderfk",
    authDomain: "reactnativetest-217410.firebaseapp.com",
    databaseURL: "https://reactnativetest-217410.firebaseio.com",
    storageBucket: "",
    projectId : "expo-app-5102b"
};

export {
    firebaseConfig
};
export default firebase.initializeApp(firebaseConfig);
