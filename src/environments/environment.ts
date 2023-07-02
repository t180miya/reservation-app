// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7rOWfk96VdxQt2NRakJg_bcTtilJk0mc",
  authDomain: "reservation-app-4d7e0.firebaseapp.com",
  projectId: "reservation-app-4d7e0",
  storageBucket: "reservation-app-4d7e0.appspot.com",
  messagingSenderId: "793284151300",
  appId: "1:793284151300:web:111a5b4c4fdf5a06254d51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
