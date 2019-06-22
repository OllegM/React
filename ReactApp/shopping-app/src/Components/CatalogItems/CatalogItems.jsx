import React from 'react';
import './CatalogItems.css';
import { Button } from 'react-bootstrap';

export function CatalogItems(props) {
  const items = props.catalog.map(item => {
    if (item.category === props.category) {
      return <CatalogItem key={item.id} item={item} toggleStock={props.toggleStock} />;
    } else {
      return null;
    }
  });
  return items;
}

export class CatalogItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      item: props.item,
    };
    
    // This binding is necessary to make `this` work in the callback
    this.toggleStock = this.toggleStock.bind(this);
  }

  toggleStock() {
    this.setState(state => (
      state.item.stocked = !state.item.stocked
    ));
  }

  render() {  
    // const { toggleStock } = this.props;
    const { item } = this.state;
    return (
      <tr className={item.stocked ? null : "unstocked"}>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>
          <Button variant="secondary" onClick={this.toggleStock}>click me</Button>
        </td>
      </tr>
    );
  }
};