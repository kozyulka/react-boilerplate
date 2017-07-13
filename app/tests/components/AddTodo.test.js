import expect from "expect";
import React from "react";
import ReactDOM from "react-dom";
import ReactTestUtils from "react-dom/test-utils";
import $ from "jquery";

import AddTodo from "../../components/AddTodo";

describe('AddTodo', () => {
    it('should exist', () => {
        expect(AddTodo).toExist()
    })
});