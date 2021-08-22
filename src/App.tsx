import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { RecoilRoot } from 'recoil';
import './App.css';
import { StylesProvider } from '@material-ui/styles';
import { LoginScreen } from './screens/Login/LoginScreen';

const theme = createMuiTheme();
function App() {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <LoginScreen />
        </RecoilRoot>
      </ThemeProvider>
    </StylesProvider>
  );
}

export default App;
