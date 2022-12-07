import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './components/App';
import ScrollToTop from './scrollToTop';
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render( /*#__PURE__*/React.createElement(Auth0Provider, {
    domain: "https://aihe-ahoaho-2022-coffee.au.auth0.com",
    clientId: "6HxJdPWldonkTeuYAFDAPRE0aI0xpSBm",
    redirectUri: window.location.origin,
    audience: "https://coffee/api"
  }, /*#__PURE__*/React.createElement(Provider, {
    store: store
  }, /*#__PURE__*/React.createElement(Router, null, /*#__PURE__*/React.createElement(ScrollToTop, null), /*#__PURE__*/React.createElement(App, null)))), document.getElementById('app'));
});