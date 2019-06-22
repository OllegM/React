import React from 'react';
import {CatalogItems} from '../CatalogItems/CatalogItems';
import Category from '../Category/Category';
import CatalogController from '../../Controllers/CatalogController';

class SiteCatalog extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      items: [],
      categories: []
    };

    // subscribe for return events from controller to component
    CatalogController.subscribers.push(this.refreshItems);
  }

  componentDidMount() {
    CatalogController.getAllItems().then((items) => {
      this.setState({
        items: items
      });
    });
    
    CatalogController.getAllCatergories().then((categories) => {
      this.setState({
        categories: categories
      });
    });
  }

  refreshItems = (items) => {
    this.setState({
      items: items
    })
  }
  
  TableHeader = <tr>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col">Add to cart</th>
    </tr>;

  Catalog() { return this.state.categories.map(categoryItem => {
    return (
      <Category title={categoryItem.category} key={categoryItem.id} >
        <CatalogItems items={this.state.items} category={categoryItem.category} updateItem={CatalogController.updateItem} />
      </Category>
    );
  });
}

  render(props) {
    return (
    <table className="table table-striped table-dark">
      <thead>
        {this.TableHeader}
      </thead>
      {this.Catalog()}
    </table>
  )};
}

export default SiteCatalog;
