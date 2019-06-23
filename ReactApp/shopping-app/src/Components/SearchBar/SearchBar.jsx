import React from 'react';
import { Button, } from 'react-bootstrap';
import { CartWindow } from './CartWindow';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: ""
    }
  }

  onSearchStringChange = (event) => {
    this.setState({
      searchString: event.target.value
    });

    this.props.searchCallback(event.target.value);
  };

  render() {
    return (
      <div className="form-group row">
        <label htmlFor="searchString" className="col-sm-2 col-form-label">Search the catalog</label>
        <div className="col-sm-8">
          <input type="text" className="form-control" id="searchString" placeholder="Search string" onChange={this.onSearchStringChange} />
        </div>
        <div className="col-sm-2 text-right">
          <Button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">Show cart</Button>
        </div>
        <CartWindow catalogController={this.props.catalogController} />
      </div>
    );
  }
}

export default SearchBar;