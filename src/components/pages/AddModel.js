import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import Main from '../layouts/Main';
import Overview from '../partial/overview';
import { addModel } from '../actions/models';

const AddModel = ({history, addModel}) => {

    const [fields , setfields] = useState([
        'id'
    ]);

    const [inputs, setInputs] = useState({
        field: '',
        name: '',
        icon: '',
        path: '',
    });

    const [error, setError] = useState();

    const removeField = (e,index) => {
        e.preventDefault();
        setfields(fields.filter((name,i) => {
            return i !== index;
        }));
    };

    const onChangeInput = (e) => {
        setInputs({...inputs,[e.target.name]: e.target.value})
    }

    const addField = (e) => {
        e.preventDefault();
        if (inputs.field) {
            setfields([...fields, inputs.field]);
            setInputs({...inputs,field: ''});
        }
    };
    
    const clearForm = () => {
        setInputs({
            field: '',
            name: '',
            icon: '',
            path: ''
        });
        setfields([]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputs.name !== '' && inputs.icon !== '' && inputs.path !== '' && fields.length > 0) {
            const input = {...inputs};

            delete input['field'];

            clearForm();
            
            addModel({
                ...input,
                fields
            });

            history.push(input.path+"/add");
        } else {
            setError("Fill fields correctly");
        }
    }

    return (
        <Main history={history}>
            <Overview title="Add New Model"/>
            <Row>
                <Col lg={12}>
                    <div className="au-card">
                        {error?
                        (
                            <Alert color="danger">
                                {error}
                            </Alert>
                        )
                        :''
                        }
                        <Form>
                            <FormGroup>
                                <Label>Model Name <span style={{color:'red'}}>*</span></Label>
                                <Input type="text" placeholder="Enter an name for your model" value={inputs.name} name="name" onChange={onChangeInput}/>
                            </FormGroup>
                            <FormGroup>
                                <Label>Model Icon <span style={{color:'red'}}>*</span></Label>
                                <Input type="text" placeholder="Add a icon" value={inputs.icon} name="icon" onChange={onChangeInput}/>
                            </FormGroup>
                            <FormGroup>
                                <Label>Model Path<span style={{color:'red'}}>*</span></Label>
                                <Input type="text" placeholder="Add a path for model" value={inputs.path} name="path" onChange={onChangeInput}/>
                            </FormGroup>
                            <FormGroup>
                                <Label>Model Fields <span style={{color:'red'}}>*</span></Label>
                                <div>
                                {fields.length>0 ?
                                    (
                                    <ul className="mb-2 list-unstyled" style={{display:'inline-flex'}}>
                                        {fields.map((field,i) => {
                                            if(field !== 'id') {
                                                return (
                                                    <li key={i} className="mt-3 mr-3 mb-1">
                                                        {field}
                                                        <button className="btn btn-sm btn-danger ml-2" onClick={(e)=>removeField(e,i)}>
                                                            <i className="icon ion-ios-remove"/>
                                                        </button>
                                                    </li>
                                                )
                                            } else {
                                                return '';
                                            }
                                            
                                        })}
                                    </ul>
                                    )
                                : ''}
                                </div>
                                <Row>
                                    <div className="col col-md-10">
                                        <Input type="text" placeholder="Add Some Fields" value={inputs.field} name="field" onChange={onChangeInput}/>
                                    </div>
                                    <div className="col col-md-2">
                                        <button className="btn btn-block btn-primary" onClick={addField}>
                                            <i className="icon ion-ios-add" />
                                        </button>
                                    </div>
                                </Row>
                            </FormGroup>
                            <button className="btn btn-block btn-success" onClick={handleSubmit}>
                                <i className="icon ion-ios-add-circle-outline mr-2"/>
                                Add Model
                            </button>
                            <hr />
                            <span style={{fontSize:13,color:'grey'}}><span style={{color:'red'}}>*</span>there are required fields</span>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Main>
    )
};

const mapDispatchToProps = {
    addModel
};

export default connect(null,mapDispatchToProps)(AddModel);