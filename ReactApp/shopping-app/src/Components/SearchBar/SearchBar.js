import React from 'react';

function SearchBar() {
  return (
      <div className="form-group row">
        <label for="searchString" className="col-sm-2 col-form-label">Search the catalog</label>
        <div class="col-sm-10">
          <input type="text" className="form-control" id="searchString" placeholder="Search string" />
        </div>
      </div>
  );
}

export default SearchBar;
