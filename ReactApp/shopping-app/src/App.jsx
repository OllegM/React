import React from 'react';
import SiteCatalog from './Components/SiteCatalog/SiteCatalog';
import Header from './Components/Header/Header';
import './App.css';

export default class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { 
  //     items: [],
  //     categories: []
  //   };
  // }

  // componentDidMount() {
  //   CatalogController.getAllItems().then((items) => {
  //     this.setState({
  //       items: items
  //     });
  //   });
    
  //   CatalogController.getAllCatergories().then((categories) => {
  //     this.setState({
  //       categories: categories
  //     });
  //   });
  // }

  render() {
    return (
      <div className="App">
        <Header />
        <SiteCatalog />
      </div>
    );
  }
}
