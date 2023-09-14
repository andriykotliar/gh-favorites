import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { customTheme } from '@/themes';
import { apolloClient } from '@/services';
import store from '@/store';
import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={apolloClient}>
        <ReduxProvider store={store}>          
          <ThemeProvider theme={customTheme}>
            <CssBaseline>
              <App />
            </CssBaseline>
          </ThemeProvider>
        </ReduxProvider>
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
