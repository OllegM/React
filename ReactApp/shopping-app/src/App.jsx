import React from 'react';
import SiteCatalog from './Components/SiteCatalog/SiteCatalog';
import Header from './Components/Header/Header';
import SearchBar from './Components/SearchBar/SearchBar';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar />
        <SiteCatalog />
      </div>
    );
  }
}
