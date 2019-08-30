import React from 'react';
import Main from '../layouts/Main';
import { Row, Col, Card, CardBody, CardHeader } from 'reactstrap';

const Home = ({history}) => {
    return (
        <Main history={history}>
            <Row>
                <Col lg={12}>
                    <div className="overview-wrap">
                        <h2 className="title-1">about this app</h2>
                    </div>
                </Col>
            </Row>
            <Row className="m-t-25">
                <Col lg={6}>
                    <Card>
                        <CardHeader>
                            Problem
                        </CardHeader>
                        <CardBody>
                            <p>
                                I am a junior developer and i think if we have a zero configuration admin panel can startup new project faster.
                            </p>
                            <p>
                                I spend a lot of time for found a good admin panel ,I am was't lucky and can't find my case and think to desgin a simple model admin
                            </p>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <CardHeader>
                            Solution
                        </CardHeader>
                        <CardBody>
                            <p>
                                If you have same problem i suggest you use this app because you can use esay this app and you can add unlimited model and use there.
                            </p>
                            <p>
                                If your developer can use this app very esay
                            </p>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Main>
    );
};

export default Home;
