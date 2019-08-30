import React, { useEffect } from 'react';

import {checkAuth} from '../helpers';

import HeaderMobile from '../partial/headerMobile';
import MenuSidebar from '../partial/menuSidebar';
import HeaderDesktop from '../partial/headerDesktop';

const Main = ({children,history}) => {

    useEffect(()=> {
        checkAuth(history);
    },[history]);

    return (
        <div className="page-wrapper">
            <HeaderMobile /> 

            <MenuSidebar />

            <div className="page-container">
                <HeaderDesktop />
                
                <div className="main-content">
                    <div className="section__content section__content--p30">
                        <div className="container-fluid">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Main;