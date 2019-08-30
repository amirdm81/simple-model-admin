import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkIfModelExists } from '../helpers';
import { addDataModel } from '../actions/models';
import Main from '../layouts/Main';
import Overview from '../partial/overview';

class AddDataModel extends Component {

    state = {
        fields: []
    }

    componentDidMount() {
        const {history, match} = this.props;
        
        match.url = match.url.replace('/add', '');

        const data = checkIfModelExists(match, history);

        this.setState({...data});
        /* eslint-disable */        
        data.fields.map(field => {
            this.setState(prevState =>({
                inputs:{
                    ...prevState.inputs,
                    [field]: ''
                }
            }));
        });
        /* eslint-enable */
    };
    
    handleInputChange = (e) => {
        const inputs = {...this.state.inputs};
        inputs[e.target.name] = e.target.value;
        this.setState({inputs:inputs});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({error: ''});
        let verify = 0;
        /* eslint-disable */
        this.state.fields.map(field => {
            if (this.state[field] !== '' && field !== 'id') {
                verify++;
            }
        });
        /* eslint-enable */
        if (this.state.fields.length - 1 === verify) {
            const state = {...this.state.inputs};
            state.id = this.state.datas.length + 1
            this.props.addDataModel({
                model: this.state.name,
                data: state
            });
            this.props.history.push(this.state.path);
        } else {
            this.setState({error: 'All Field Not Filled'});
        }
    }

    render(){
        const {match} = this.props
        return (
            <Main history={this.props.history}>
                <Overview title={`Add New ${match.params.model}`}/>

                <div className="row">
                    <div className="col-md-12">
                        <div className="au-card m-b-100">
                            {this.state.error ?
                                (
                                    <div className="alert alert-danger">
                                        {this.state.error}
                                    </div>
                                )
                            : ''}
                            
                            <form>
                                {this.state.fields.map((field, i) => {
                                
                                   return field === 'id' ? 
                                    (
                                        <div className="form-group" key={i}>
                                            <label>#</label>
                                            <input className="form-control" value={this.state.datas.length + 1} readOnly/>
                                        </div>
                                    )
                                   : (
                                    <div className="form-group" key={i}>
                                        <label>{field}</label>
                                        <input className="form-control" name={field} onChange={this.handleInputChange}/>
                                    </div>
                                   )
                                })}
                            </form>
                            <button className="btn btn-info btn-block" onClick={this.handleSubmit}>
                                <i className="icon ion-ios-add-circle-outline mr-2"/>
                                Add Item
                            </button>
                        </div>
                    </div>
                </div>
            </Main>
        )
    }
};

const mapDispatchToProps = {
    addDataModel
}

export default connect(null ,mapDispatchToProps)(AddDataModel);

