import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import * as serviceWorker from './serviceWorker';

const theme = createMuiTheme({
  typography: {
    fontFamily: "'Open Sans Condensed', sans-serif",
  }
});

theme.typography.caption = {
  fontFamily: "'Fredericka the Great', cursive",
  fontSize: '40px',
  color: 'white',
}
theme.typography.h4 = {
  fontFamily: "'Fredericka the Great', cursive",
  fontSize: '28px',
}
theme.typography.h6 = {
  fontFamily: "'Fredericka the Great', cursive",
  fontSize: '16px',
  fontWeight: 600,
}

const ThemeProvider = () => <MuiThemeProvider theme={theme}>
  <App />
</MuiThemeProvider>

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
