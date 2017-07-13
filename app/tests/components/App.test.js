import expect from "expect";
import React from "react";
import ReactDOM from "react-dom";
import ReactTestUtils from "react-dom/test-utils";
import $ from "jquery";


import App from "../../components/App";

describe('App', () => {
    it('should exist', () => {
        expect(App).toExist()
    })
});