import React from 'react';
import CatalogItem from '../CatalogItem/CatalogItem';

function SiteCatalog(props) {
  const { catalog } = props;

  let catalogItems = catalog.map(item => {
      return <CatalogItem item={item} />;
  });

  return (
    <div>
      <div>This is a component site catalog</div>
      <div>{catalogItems}</div>
    </div>
  );
}

export default SiteCatalog;
