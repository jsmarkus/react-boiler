/**
 * @jsx React.DOM
 */

var React = require('react');

var App = require('./app');
// a=b;
React.renderComponent(
  <App />, document.getElementById('app'));