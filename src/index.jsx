import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { PrimeReactProvider } from 'primereact/api';
        
ReactDOM.render(
  
  <Provider store={store}>
      <PrimeReactProvider>
    <App />
    </PrimeReactProvider>
  </Provider>,
  document.getElementById('root')
);
