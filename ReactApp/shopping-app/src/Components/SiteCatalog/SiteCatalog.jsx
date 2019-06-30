import React from 'react';
import { CatalogItems } from '../CatalogItems/CatalogItems';
import Category from '../Category/Category';
import CatalogController from '../../Controllers/CatalogController';
import SearchBar from '../SearchBar/SearchBar';

class SiteCatalog extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      categories: []
    };
    // let stupidVar = "";
    for (let i=0; i < 10e6; i++) {
      const stupidVar = "bla" + i;
    }
    // subscribe for return events from controller to component
    CatalogController.subscribers.push(this.refreshItems);
//    CatalogController.subscribers.push(this.refreshItems);
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

  // TODO: move to CatalogController
  searchCallback = (filterValue) => {
    CatalogController.getAllItems().then((items) => {
      let filteredItems = items.map((item) => {
        if (filterValue === "" || item.name.toLowerCase().indexOf(filterValue.toLowerCase()) >= 0) {
          return item;
        } else {
          return null;
        }
      });

      this.setState({
        items: filteredItems
      });
    });
  }

  TableHeader = <div className="row h5 border border-primary py-3 my-0">
    <div className="col-4">Title</div>
    <div className="col-4">Price</div>
    <div className="col-4">Add to cart</div>
  </div>;

  Catalog() {
    return this.state.categories.map(categoryItem => {
      return (
        <Category title={categoryItem.category} key={categoryItem.id} >
          <CatalogItems items={this.state.items} category={categoryItem.category} updateItem={CatalogController.updateItem} />
        </Category>
      );
    });
  }

  render(props) {
    return (
      <div className="container">
        <SearchBar searchCallback={this.searchCallback} catalogController={CatalogController} />
        {this.TableHeader}
        {this.Catalog()}
      </div>
    )
  };
}

export default SiteCatalog;
