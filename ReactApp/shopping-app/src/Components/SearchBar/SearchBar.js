import React from 'react';

class SearchBar extends React.Component {
  constructor(props){
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
          <div className="col-sm-10">
            <input type="text" className="form-control" id="searchString" placeholder="Search string" onChange={this.onSearchStringChange} />
          </div>
        </div>
    );
  }
}

export default SearchBar;
