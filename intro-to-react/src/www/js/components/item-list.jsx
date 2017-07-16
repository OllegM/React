"use strict";

const
    React = require("react"),
    Item = require("./item"),
    ItemForm = require("./item-form");


let ItemsList = React.createClass({
    getInitialState: function () {
        return {
            items: this.props.items
        }
    },

    addItem: function (newItem) {
        this.state.items.push(newItem);
        this.setState({
            items: this.state.items
        });
    },

    render: function () {
        return <div>
            <h1>{this.props.header}</h1>
            <ul>
                {this.state.items.map(item => <Item>{item + "-state"}</Item>)}
            </ul>
            <ItemForm addItem={this.addItem} />            
        </div>;
    }
});

module.exports = ItemsList;