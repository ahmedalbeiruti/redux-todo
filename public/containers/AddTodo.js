'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _actions = require('../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AddTodo = function AddTodo(_ref) {
    var dispatch = _ref.dispatch;

    var input = _react2.default.createRef();

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'form',
            { action: '', onSubmit: function onSubmit(e) {
                    e.preventDefault();
                    if (!input.current.value.trim()) {
                        return;
                    }
                    dispatch((0, _actions.addTodo)(input.current.value));
                    input.current.value = '';
                }
            },
            _react2.default.createElement('input', { ref: input }),
            _react2.default.createElement(
                'button',
                { type: 'submit' },
                'Add Todo'
            )
        )
    );
};

AddTodo = (0, _reactRedux.connect)()(AddTodo);

exports.default = AddTodo;