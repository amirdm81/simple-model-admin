import React, { Component } from 'react';
import { Table, Row, Col } from 'reactstrap';

class TableGenerator extends Component {
    render(){
        const {fields, datas} = this.props;
        return (
            <Row className="m-t-25">
                <Col lg={12}>
                    <div className="au-card">
                        <Table>
                            <thead>
                                <tr>
                                    {fields.map((field,i) => (
                                        <th key={i}>
                                            {field === 'id'?'#':field}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {datas.map((data,i) => (
                                    <tr key={i}>
                                        {fields.map((field,i)=> (
                                            <td key={i}>
                                                {data[field]}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </Col>
            </Row>
        )
    }
};

export default TableGenerator;

