/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import catalog from './catalog';

ReactDOM.render(<App catalog={catalog} />, document.getElementById('root'));
