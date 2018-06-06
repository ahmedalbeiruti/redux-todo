'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Todo = function Todo(_ref) {
    var onClick = _ref.onClick,
        completed = _ref.completed,
        text = _ref.text;

    return _react2.default.createElement(
        'li',
        { onClick: onClick, style: {
                textDecoration: completed ? 'line-through' : 'none'
            } },
        text
    );
};

exports.default = Todo;