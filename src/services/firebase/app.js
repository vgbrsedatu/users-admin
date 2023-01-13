import { initializeApp } from 'firebase/app';

// Añade aquí tus credenciales
const firebaseOptions = {
  apiKey: 'AIzaSyDLS2vUjj5jRxQZwzm6MVvTiJgVoNGQU9w',
  authDomain: 'fir-testing-vgbr.firebaseapp.com',
  projectId: 'fir-testing-vgbr',
  storageBucket: 'fir-testing-vgbr.appspot.com',
  messagingSenderId: '70231797598',
  appId: '1:70231797598:web:ba439f5219fb6a8922a9cf',
  measurementId: 'G-K7Z4YD4BQV',
};

const app = initializeApp(firebaseOptions);

export default app;
