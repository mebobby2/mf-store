import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

class Cart extends HTMLElement {
  attachCallback() {
    ReactDOM.render(<App />, this.createShadowRoot());
  }
}

document.registerElement('microfrontends-cart', Cart);
