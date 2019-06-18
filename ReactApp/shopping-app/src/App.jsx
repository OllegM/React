/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import SiteCatalog from './Components/SiteCatalog/SiteCatalog';
import './App.css';
import {Button} from 'react-bootstrap';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      catalog: props.catalog,
    };
  }

  render() {
    const catalog = this.state.catalog;
    return (
      <div className="App">
        <SiteCatalog catalog={catalog} />
        <Button>Hello button</Button>
      </div>
    );
  }
}
