import React from "react";

export class ShoppingList extends React.Component {
    
    constructor (props) {
        super(props);
    }

    render() {
        return (
        <div>
            <h1>
                What would you like to shop today?
            </h1>
            <Category categories={this.props.categories}>
                <Goods items={this.props.items.map((item) => {
                    if (item.category == 'Electronics') {
                        return item;
                    }
                })} />
            </Category>
        </div>
        );
    }
};

function Category (props) {
    const categories = props.categories;
    const categoryTitles = categories.map((category) => {
        return (
            <div>
                <h3>{category}</h3>
                {props.children}
            </div>
        );
    });

    return (
    <div>
        {categoryTitles}
    </div>
    );
}

function Goods(props) {
    const items = props.items.map((item) => {
        return (
            <div>
                {item.name}
            </div>
        );
    })
    return (
        <div>
            {items}
        </div>
    );
}

