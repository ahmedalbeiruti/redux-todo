"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _redux = require("redux");

var _actions = require("./actions");

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var SHOW_ALL = _actions.VisibilityFilters.SHOW_ALL;


var todoApp = (0, _redux.combineReducers)({
  visibilityFiltering: visibilityFiltering,
  todos: todos
});

function todos() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _actions.ADD_TODO:
      return [].concat(_toConsumableArray(state), [{
        text: action.text,
        completed: false
      }]);

    case _actions.TOGGLE_TODO:
      return state.map(function (todo, index) {
        if (index === action.index) {
          return _extends({}, todo, {
            completed: !todo.completed
          });
        }
        return todo;
      });

    default:
      return state;
  }
}

function visibilityFiltering() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : SHOW_ALL;
  var action = arguments[1];

  switch (action.type) {
    case _actions.SET_VISIBILITY_FILTER:
      return action.filter;

    default:
      return state;
  }
}

exports.default = todoApp;