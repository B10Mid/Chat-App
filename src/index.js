import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { StateProvider } from './providers/StateProvider';
import reducer, { initialState } from './reducers/reducer';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
