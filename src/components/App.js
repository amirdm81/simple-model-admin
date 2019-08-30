import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import AddModel from './pages/AddModel';
import Model from './pages/Model';
import AddDataModel from './pages/AddDataModel';

class App extends Component {
    render(){
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/:model" component={Model}/>
                    <Route path="/add/model" component={AddModel}/>
                    <Route path="/:model/add" component={AddDataModel}/>
                    <Route path="/login" component={Login}/>
                </Switch>
                {/* <Redirect to="/login"/> */}
            </Router>
        );
    }
};

export default App;