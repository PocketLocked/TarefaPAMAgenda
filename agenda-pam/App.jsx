import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';

import Routes from './src/routes';

const App = () => {
  return (
    <>
      <StatusBar style="light" backgroundColor="#ac2686" translucent />
      <Routes />
    </>
  );
};

export default App;
