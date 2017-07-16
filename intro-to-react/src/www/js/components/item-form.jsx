"use strict";

const
    React = require("react");

let ItemForm = React.createClass({
    getInitialState: function () {
        return {
            newItem: ""
        };
    },

    onChange: function (e) {
        this.setState({
            newItem: e.target.value
        });
    },

    addItem: function () {
        this.props.addItem(this.state.newItem);
        this.setState({
            newItem: ""
        });
        return false;
    },

    submitForm: function(e) {
        e.preventDefault();
        this.addItem();
    },

    render: function () {
        return <form onSubmit={this.submitForm}>
            <label htmlFor="newItem">New item: </label>
            <input type="text" id="newItem" value={this.state.newItem} onChange={this.onChange} />
            <button type="button" onClick={this.addItem}>Add item</button>
        </form>
    }
});

module.exports = ItemForm;