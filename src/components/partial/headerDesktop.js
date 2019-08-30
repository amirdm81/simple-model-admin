import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const HeaderDesktop = () => {

    const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);

    const togglerAccountDropdown = () => {
        setIsAccountDropdownOpen(!isAccountDropdownOpen);
    }

    return (
        <header className="header-desktop">
            <div className="section__content section__content--p30">
                <div className="container-fluid">
                    <div className="header-wrap">
                        <form className="form-header">
                            <input className="au-input au-input--xl" type="text" placeholder="Search for wath ....?"/>
                            <button className="au-btn--submit">
                                <i className="icon ion-ios-search"/>
                            </button>
                        </form>
                        <div className="header-button">
                            <div className="account-wrap">
                                <div className={`account-item clearfix${isAccountDropdownOpen?' show-dropdown':''}`} onClick={togglerAccountDropdown}>
                                    <div className="image">
                                        <img src={require('../../assets/img/profile.jpg')} alt="John Doe"/>
                                    </div>
                                    <div className="content">
                                        <Link to="#">John Doe</Link>
                                    </div>
                                    <div className={`account-dropdown${isAccountDropdownOpen?' js-dropdown':''}`}>
                                        <div className="info clearfix">
                                            <div className="image">
                                                <img src={require('../../assets/img/profile.jpg')} alt="John Doe"/>
                                            </div>
                                            <div className="content">
                                                <h5 className="name">
                                                    <Link to="#">John Doe</Link>
                                                </h5>
                                                <span className="email">jdoe@gmail.com</span>
                                            </div>
                                        </div>
                                        <div className="account-dropdown__body">
                                            <div className="account-dropdown__item">
                                                <Link to="#">
                                                    <i className="icon ion-ios-person"/>Accounts
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="account-dropdown__footer">
                                            <Link to="#">
                                            <i className="icon ion-ios-power"/>Logout
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderDesktop;