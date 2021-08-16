import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { RecoilRoot } from 'recoil';
import './App.css';
import { TestScreen } from './screens/Test/TestScreen';

const theme = createMuiTheme();
function App() {
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <TestScreen />
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;
