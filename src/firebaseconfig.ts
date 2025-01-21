// src/firebaseConfig.ts

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// Firebase config object, replace with your actual Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXAABcXS8ilT9m_kYrsoYkHs2DvY_gFA0",
  authDomain: "portfolio-gowtham.firebaseapp.com",
  projectId: "portfolio-gowtham",
  storageBucket: "portfolio-gowtham.firebasestorage.app",
  messagingSenderId: "1015473462308",
  appId: "1:1015473462308:web:1ace0e4e81386c616d8cb1",
  measurementId: "G-7TGHPFZ451"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
