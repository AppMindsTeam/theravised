import React, {useEffect} from 'react';
import Navigation from './src/navigation/Navigation';
import {UserProvider} from './src/Hooks/UseContext';

const App = () => {
  return (
    <UserProvider>
      <Navigation />
    </UserProvider>
  );
};

export default App;
