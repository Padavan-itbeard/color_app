import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import data from './colorsData.json';


ReactDOM.render(
  <React.StrictMode>
    <App colors={data} />
  </React.StrictMode>,
  document.getElementById('root')
);
