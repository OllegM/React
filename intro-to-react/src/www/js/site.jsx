"use strict";

const 
    React = require("react"),
    ReactDOM = require("react-dom"),
    ItemsList = require("./components/item-list");

let items = [
    "Item 1", "Item 2", "Item 3"
];

ReactDOM.render(<ItemsList header="Items List" items={items} />, document.querySelector("[class='container']"));