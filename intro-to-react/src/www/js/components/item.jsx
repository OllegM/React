"use strict";

const React = require("react");

let Item = React.createClass({
    render: function() {
        return <li>{this.props.children}</li>
    }
});

module.exports = Item;