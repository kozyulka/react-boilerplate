import expect from "expect";
import React from "react";
import ReactDOM from "react-dom";
import ReactTestUtils from "react-dom/test-utils";
import $ from "jquery";

import TodoItem from "../../components/TodoItem";

describe('TodoItem', () => {
    it('should exist', () => {
       expect(TodoItem).toExist();
    })
});