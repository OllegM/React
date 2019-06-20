import React from 'react';
import CatalogItem from '../CatalogItem/CatalogItem';

function SiteCatalog(props) {
  const { catalog } = props;

  const tableHeader = (
    <tr>
      <th scope="col">Check</th>
      <th scope="col">Title</th>
      <th scope="col">Category</th>
    </tr>
  );

  const catalogItems = catalog.map(item => {
      return <CatalogItem item={item} />;
  });

  return (
    <table className="table table-striped table-dark">
      {tableHeader}
      {catalogItems}
    </table>
  );
}

export default SiteCatalog;
