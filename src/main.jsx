import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaapK33UFtCrP6fn_vI8SPsHdHuBVKZ30",
  authDomain: "turismo-proyect.firebaseapp.com",
  projectId: "turismo-proyect",
  storageBucket: "turismo-proyect.appspot.com",
  messagingSenderId: "496353506460",
  appId: "1:496353506460:web:31d4221fa430c298946959"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
    <ChakraProvider>
      <App />
      
      
    </ChakraProvider>
    
  
)
