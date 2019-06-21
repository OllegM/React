import React from 'react';
import './CatalogItems.css';

export function CatalogItems(props) {
  const items = props.catalog.map(item => {
    if (item.category === props.category) {
      return <CatalogItem key={item.id} item={item} />;
    } else {
      return null;
    }
  });
  return items;
}

export function CatalogItem(props) {
  const { item } = props;
  return (
    <tr className={item.stocked?null:"unstocked"}>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td></td>
    </tr>
  );
};