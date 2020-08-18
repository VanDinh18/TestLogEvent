/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/analytics';

var firebaseConfig = {
    apiKey: "AIzaSyDNXZLuRoovgYy-Qz9qCaM0IeLHvrFnI9A",
    authDomain: "fir-demo-12dae.firebaseapp.com",
    databaseURL: "https://fir-demo-12dae.firebaseio.com",
    projectId: "fir-demo-12dae",
    storageBucket: "fir-demo-12dae.appspot.com",
    messagingSenderId: "1039637297038",
    appId: "1:1039637297038:web:463d14144c036bbaa0d6df",
    measurementId: "G-6PEFEQDPQH"
};
// Initialize Firebase
if (!firebase.app.length) {
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
}

AppRegistry.registerComponent(appName, () => App);
