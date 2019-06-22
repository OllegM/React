import React from 'react';
// import './Category.scss';

function Category(props) {
  return (
    <div>
      <div className="row bg-primary text-white border border-primary">
        <div className="col h3">{props.title}</div>
      </div>
      {props.children}
    </div>
  );
}

export default Category;
