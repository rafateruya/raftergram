import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { RecoilRoot } from 'recoil';
import './App.css';
import { LoginScreen } from './screens/Login/LoginScreen';

const theme = createMuiTheme();
function App() {
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <LoginScreen />
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;
