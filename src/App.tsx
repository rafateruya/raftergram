import React from 'react';
import { RecoilRoot } from 'recoil';
import './App.css';
import { TestScreen } from './screens/Test/TestScreen';

function App() {
  return (
    <RecoilRoot>
      <TestScreen />
    </RecoilRoot>
  );
}

export default App;
