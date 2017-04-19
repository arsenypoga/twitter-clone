import React from 'react';
import './Toolbar.css';
//import NavigationTabs from './NavigationTabs'
import NavigationTabContainer from '../../Containers/NavigationTabContainer'
import Logo from './Logo'
import SearchBar from './SearchBar'
const Toolbar = () => (
  <div className="toolbar">
    <div className="container">
      <NavigationTabContainer />
      <Logo />
      <SearchBar />
    </div>
  </div>
);

Toolbar.propTypes = {

};

export default Toolbar
