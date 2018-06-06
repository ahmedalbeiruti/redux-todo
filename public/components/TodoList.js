'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Todo = require('./Todo');

var _Todo2 = _interopRequireDefault(_Todo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TodoList = function TodoList(_ref) {
    var todos = _ref.todos,
        onTodoClick = _ref.onTodoClick;

    return _react2.default.createElement(
        'ul',
        null,
        todos.map(function (todo, index) {
            return _react2.default.createElement(_Todo2.default, _extends({ key: index }, todo, { onClick: function onClick() {
                    return onTodoClick(index);
                } }));
        })
    );
};

exports.default = TodoList;