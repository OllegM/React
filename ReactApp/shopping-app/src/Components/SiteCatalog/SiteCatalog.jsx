import React from 'react';
import {CatalogItems} from '../CatalogItems/CatalogItems';
import Category from '../Category/Category';

function SiteCatalog(props) {
  const { catalog, categories } = props;

  const TableHeader = (
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col">Add to cart</th>
    </tr>
  );

  const CatalogCategories = categories.map(categoryItem => {
    return (
      <Category title={categoryItem.category} key={categoryItem.id} >
        <CatalogItems catalog={catalog} category={categoryItem.category} />
      </Category>
    );
  });

  return (
    <table className="table table-striped table-dark">
      <thead>
        {TableHeader}
      </thead>
      {CatalogCategories}
    </table>
  );
}



export default SiteCatalog;
