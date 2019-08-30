import React, {Component} from 'react';
import Main from '../layouts/Main';
import { Link } from 'react-router-dom';
import TableGenerator from '../partial/tableGenerator';
import Overview from '../partial/overview';
import { checkIfModelExists } from '../helpers';

class Model extends Component {

    state = {
        fields: [],
        datas: []
    }

    componentDidMount () {
        const {match, history} = this.props;
        
        const data = checkIfModelExists(match,history);

        this.setState({...data});
    }

    render() {
        const {history,match} = this.props;
        return (
            <Main history={history}>
                <Overview title={match.params.model} button={ 
                <Link to={`/${match.params.model}/add`} className="btn btn-primary btn-large">
                    <i className="icon ion-ios-add mr-2"/>
                    Add Item
                </Link> }/>
                <TableGenerator fields={this.state.fields} datas={this.state.datas}/>
            </Main>
        );
    };
};

export default Model;