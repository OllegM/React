import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import catalog from './catalog';

let i = 0; // item counter
let c = 0; // category counter
const siteCatalog = catalog.map((item) => {item.id = (i++).toString(); return item; });
const catalogCategories = new Set(siteCatalog.map((item) => {
    return item.category;
}));

ReactDOM.render(<App catalog={siteCatalog} categories={catalogCategories} />, document.getElementById('root'));
