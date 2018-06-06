'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addTodo = addTodo;
exports.toggleTodo = toggleTodo;
exports.setVisibilityFilter = setVisibilityFilter;

/**
 * action types
 */
var ADD_TODO = exports.ADD_TODO = 'ADD_TODO';
var TOGGLE_TODO = exports.TOGGLE_TODO = 'TOGGLE_TODO';
var SET_VISIBILITY_FILTER = exports.SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

/**
 * other variables
 */
var VisibilityFilters = exports.VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'

    /**
     * action creators
     */

};function addTodo(text) {
    return {
        type: ADD_TODO,
        text: text
    };
}

function toggleTodo(index) {
    return {
        type: TOGGLE_TODO,
        index: index
    };
}

function setVisibilityFilter(filter) {
    return {
        type: SET_VISIBILITY_FILTER,
        filter: filter
    };
}