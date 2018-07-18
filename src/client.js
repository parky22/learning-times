import React from 'react';
import ReactDOM from 'react-dom';
import { hotApp as App } from './App';

ReactDOM.hydrate(<App />, document.getElementById('app'));
