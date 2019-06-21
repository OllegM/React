/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import SiteCatalog from './Components/SiteCatalog/SiteCatalog';
import Header from './Components/Header/Header';
import './App.css';
// import {Button} from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      catalog: props.catalog,
    };
  }

  render() {
    const catalog = this.state.catalog;
    const categories = this.props.categories;
    return (
      <div className="App">
        <Header />
        <SiteCatalog catalog={catalog} categories={categories} />
      </div>
    );
  }
}
