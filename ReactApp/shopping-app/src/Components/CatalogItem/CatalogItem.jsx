import React from 'react';
import './CatalogItem.css';

const CatalogItem = (props) => {
    const { item } = props;
    return (
    <tr>
        <td></td>
        <td>{item.name}</td>
        <td>{item.category}</td>
    </tr>
    );
};

export default CatalogItem;