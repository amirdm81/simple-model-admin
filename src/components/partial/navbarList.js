import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

const NavbarList = ({models, location}) => {

    const checkIfActive = (path) => {
        if (location.pathname.indexOf(path) > -1) {
            return 'active';
        }else {
            return '';
        }
    }

    return (
        <>
            {models.map((model,i) => (
                <li key={i} className={`${checkIfActive(model.path)}`}>
                    <Link to={model.path}>
                        <i className={`icon ion-ios-${model.icon}`}/>
                        {model.name}
                    </Link>
                </li>
            ))}
            <li className={`${checkIfActive('/add/model')}`}>
                <Link to="/add/model">
                    <i className="icon ion-ios-add"/>
                    Add New Model
                </Link>
            </li>
        </>
    )
};

const mapStateToProps = state => ({
    models: state.models
});

export default connect(mapStateToProps)(withRouter(NavbarList));