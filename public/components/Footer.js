'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FilterLink = require('../containers/FilterLink');

var _FilterLink2 = _interopRequireDefault(_FilterLink);

var _actions = require('../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer() {
    _react2.default.createElement(
        'p',
        null,
        'Show:',
        ' ',
        _react2.default.createElement(
            _FilterLink2.default,
            { filter: _actions.VisibilityFilters.SHOW_ALL },
            'All'
        ),
        ', ',
        _react2.default.createElement(
            _FilterLink2.default,
            { filter: _actions.VisibilityFilters.SHOW_ACTIVE },
            'Active'
        ),
        ', ',
        _react2.default.createElement(
            _FilterLink2.default,
            { filter: _actions.VisibilityFilters.SHOW_COMPLETED },
            'Completed'
        )
    );
};

exports.default = Footer;