import React from 'react';
import './CatalogItems.css';
import { Button } from 'react-bootstrap';

export function CatalogItems(props) {
  const items = props.items.map(item => {
    if (item.category === props.category) {
      return <CatalogItem key={item.id} item={item} updateItem={props.updateItem} />;
    } else {
      return null;
    }
  });
  return items;
}

export class CatalogItem extends React.Component {

  constructor(props) {
    super(props);
    this.toggleStock = this.toggleStock.bind(this);
  }

  toggleStock() {
      let item = this.props.item;
      item.incart = !item.incart;
      this.props.updateItem(item);
  }

  render() {  
    // const { toggleStock } = this.props;
    const item = this.props.item;

    const className = (item.stocked ? '' : 'unstocked') + ' ' + (item.incart ? 'incart' : '');

    return (
      <tr className={className}>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>
          <Button variant="secondary" disabled={!item.stocked} onClick={this.toggleStock}>{item.incart ? 'Remove from cart' : 'Add to cart'}</Button>
        </td>
      </tr>
    );
  }
};