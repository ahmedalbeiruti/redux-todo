'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _AddTodo = require('../containers/AddTodo');

var _AddTodo2 = _interopRequireDefault(_AddTodo);

var _VisibleTodoList = require('../containers/VisibleTodoList');

var _VisibleTodoList2 = _interopRequireDefault(_VisibleTodoList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_AddTodo2.default, null),
        _react2.default.createElement(_VisibleTodoList2.default, null),
        _react2.default.createElement(_Footer2.default, null)
    );
};

exports.default = App;