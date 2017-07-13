import expect from "expect";
import React from "react";
import ReactDOM from "react-dom";
import ReactTestUtils from "react-dom/test-utils";
import $ from "jquery";


import TodoList from "../../components/TodoList";

describe('TodoList', () => {
    it('should exist', () => {
        expect(TodoList).toExist();
    })
});