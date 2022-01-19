import { getApp, getApps, initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getReactNativePersistence } from "firebase/auth/react-native";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjua40K6glrXxbnHVBVdIn6EGCptcMpSg",
  authDomain: "outfits-app.firebaseapp.com",
  projectId: "outfits-app",
  storageBucket: "outfits-app.appspot.com",
  messagingSenderId: "362288449251",
  appId: "1:362288449251:web:8ba248d547cadf15b727d6",
  measurementId: "G-D33WTQTJX7",
  databaseURL:
    "https://outfits-app-default-rtdb.europe-west1.firebasedatabase.app/",
};

initializeApp(firebaseConfig);

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export default app;
