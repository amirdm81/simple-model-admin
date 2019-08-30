import React from 'react';

const Overview = ({title, button}) => {
    return (
        <div className="row m-b-25">
            <div className="col-md-12">
                <div className="overview-wrap">
                    <h2 className="title-1">{title}</h2>
                    {button}
                </div>
            </div>
        </div>
    )
};

export default Overview;