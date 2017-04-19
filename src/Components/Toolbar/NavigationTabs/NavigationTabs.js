import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavigationTabs.css'


const NavigationTabs = ({navigationItems, getNavigationItems}) => {

  return (
  <div className="navigation-tabs">
    <div className="navigation-list">
      { navigationItems.map((item) => (
        <NavLink
          strict
          exact
          activeClassName="active"
          className="navigation-listItem"
          key={item.get("id")}
          to={ item.get("destination") }
          onClick={() => getNavigationItems(item.get("id"))}
        >
        <div
          className="navigation-link"
        >
          { item.get("name") }
        </div>
          </NavLink>
      )) }
    </div>
  </div>
)}

export default NavigationTabs
