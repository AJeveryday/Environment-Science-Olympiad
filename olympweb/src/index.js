import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
<React.Strictmode>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
 </React.Strictmode>,
document.getElementById('root')
);