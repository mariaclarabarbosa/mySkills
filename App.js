import React from 'react';
import { StatusBar, Platform } from 'react-native';
import Home from './src/pages/Home';

export default function App() {
  return (
    <>
      <StatusBar 
        barStyle='light-content' 
        backgroundColor={Platform.OS === 'android' ? '#121015' : undefined} 
      />
      <Home />
    </>
  );
}