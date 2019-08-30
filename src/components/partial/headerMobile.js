import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import NavbarList from './navbarList';
 
const HeaderMobile = () => {
    const [isHeaderMobileOpen, setIsHeaderMobileOpen] = useState(false);

    const togglerHeaderMobile = () => {
        setIsHeaderMobileOpen(!isHeaderMobileOpen);
    }

    return (
        <div className="header-mobile d-block d-lg-none">
            <div className="header-mobile__bar">
                <div className="container-fluid">
                    <div className="header-mobile-inner">
                        <Link to="/" className="logo">
                            Simple Admin React
                        </Link>
                        <button className={`hamburger hamburger--slider${isHeaderMobileOpen?' is-active':''}`} onClick={togglerHeaderMobile}>
                            <span className="hamburger-box">
                                <span className="hamburger-inner"/>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <nav className={`navbar-mobile${isHeaderMobileOpen?' d-block':''}`}>
                <div className="container-fluid">
                    <ul className="navbar-mobile__list list-unstyled">
                        <NavbarList />
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default HeaderMobile;
