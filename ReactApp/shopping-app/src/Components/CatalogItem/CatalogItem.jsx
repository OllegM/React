import React from 'react';
import './CatalogItem.css';

const CatalogItem = (props) => {
    const { item } = props;
    return (
    <tr className="">
        <td className="row-sm"></td>
        <td>{item.name}</td>
        <td>{item.category}</td>
    </tr>
    );
};

export default CatalogItem;