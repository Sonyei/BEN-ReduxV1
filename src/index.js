import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import App from './App';
import {createStore, applyMiddleware, compose} from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { rootReducer } from './Reducers/index'
import { ThemeProvider } from 'styled-components'
import { theme } from './Theme/Theme'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
   applyMiddleware(thunk),
))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
