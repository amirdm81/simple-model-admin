import React from 'react';
import { Link } from 'react-router-dom';
import NavbarList from './navbarList';

const MenuSidebar = () => {

    return (
        <div className="menu-sidebar d-none d-lg-block">
            <div className="logo">
                <Link to="/">
                    Simple Admin React
                </Link>
            </div>
            <div className="menu-sidebar__content">
                <nav className="navbar-sidebar">
                    <ul className="list-unstyled navbar__list">
                        <NavbarList />
                    </ul>
                </nav>
            </div>
        </div>
    )
};

export default MenuSidebar;