import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

class ProductsList extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<App />, this.createShadowRoot());
  }
}

window.customElements.define('microfrontends-products-list', ProductsList);
