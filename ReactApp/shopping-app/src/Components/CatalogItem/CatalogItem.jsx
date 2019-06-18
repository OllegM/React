import React from 'react';
import './CatalogItem.css';

const CatalogItem = (props) => {
    const { item } = props;
    return (
    <div className="itemLine">
        <div className="itemName">{item.name}</div><div className="itemCategory">{item.category}</div>
    </div>
    );
};

export default CatalogItem;