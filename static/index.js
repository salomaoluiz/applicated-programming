import React, { StrictMode } from 'react';
import ReactDom from 'react-dom';
import App from '@src/App';

import './index.css';

ReactDom.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('app'),
);
