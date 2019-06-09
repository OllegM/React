"use strict";

import React from "react";
import { render } from "react-dom";
import { ShoppingList } from "./shop/shopping-list";
// ItemsList = require("./components/item-list");


const shoppingItems = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
  ];

  const shoppingCategories = [...new Set(shoppingItems.map((item) => item.category ))];
  

// ReactDOM.render(<ItemsList header="Items List" items={items} />, document.querySelector("[class='container']"));

render(<ShoppingList items={shoppingItems} categories={shoppingCategories} />, document.querySelector("[class='container']"));
//render(<h1>Hello!</h1>, document.querySelector("[class='container']"));