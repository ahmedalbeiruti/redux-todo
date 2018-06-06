"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require("react-redux");

var _actions = require("../actions");

var _TodoList = require("../components/TodoList");

var _TodoList2 = _interopRequireDefault(_TodoList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getVisibleTodos = function getVisibleTodos(todos, filter) {
  switch (filter) {
    case "SHOW_COMPLETED":
      return todos.filter(function (todo) {
        return todo.completed;
      });

    case "SHOW_ACTIVE":
      return todos.filter(function (todo) {
        return !todo.completed;
      });

    case "SHOW_ALL":

    default:
      return todos;
  }
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onTodoClick: function onTodoClick(id) {
      dispatch((0, _actions.toggleTodo)(id));
    }
  };
};

var VisibleTodoList = (0, _reactRedux.connect)({
  mapStateToProps: mapStateToProps,
  mapDispatchToProps: mapDispatchToProps
})(_TodoList2.default);

exports.default = VisibleTodoList;