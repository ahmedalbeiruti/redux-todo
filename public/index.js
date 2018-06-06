'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _App = require('./components/App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_reducers2.default);
// const store = createStore(todoApp, window.STATE_FROM_SERVER) //another version of the createStore function

(0, _reactDom.render)(_react2.default.createElement(
    _App2.default,
    null,
    _react2.default.createElement(_reactRedux.Provider, { store: store })
), document.getElementById('root'));