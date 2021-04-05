import React from 'react'
import { NavLink } from 'react-router-dom'
import { navigationLinks } from '../../data/navigation-links'

const NavigationPanel: React.FunctionComponent = () => {
    return (
        <div className="menu-bar--navigation-panel">
            <span>MENU</span>
            {
                navigationLinks.map((item, index) => {
                    return (
                        <NavLink key={index} className="menu-bar--navigation-panel__item"
                            to={item.url} 
                            activeClassName='current'
                            exact={true}>
                            <item.Icon/>
                            <span>{item.name}</span>
                        </NavLink>
                    )
                })
            }
        </div>
    )
}

export default NavigationPanel