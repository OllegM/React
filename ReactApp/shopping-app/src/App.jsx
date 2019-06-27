import React, { Suspense } from 'react';
// import SiteCatalog from './Components/SiteCatalog/SiteCatalog';
import Header from './Components/Header/Header';
import './App.css';

const SiteCatalog = React.lazy(() => import('./Components/SiteCatalog/SiteCatalog'));

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <SiteCatalog />
        </Suspense>
      </div>
    );
  }
}
