import React from 'react';
import './Category.scss';

function Category(props) {
  return (
    <tbody>
      <tr>
        <th className="categoryTitle h3" colSpan='3'>{props.title}</th>
      </tr>
      {props.children}
    </tbody>
  );
}

export default Category;
