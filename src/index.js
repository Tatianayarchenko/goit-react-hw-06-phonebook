import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';
import './index.css';
import { Provider } from 'react-redux';
// import { store, persistor } from 'store/store'; // исп когда стор 1 общий
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'redux/store';
// import { store } from 'redux/store'; // use without redux-persist

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
