import React from 'react';

const JumbotronComponent = (props) => {

    return (
        <div className="jumbotron">
            <div className="container">
                <h1 className="display-4">{props.app_name}!</h1>
                <p className="lead">Select the Pizza you would like to oder and we will find the cheapest price in town. All pizza's are Medium.</p>
                <p>For {props.order_date.toDateString()}</p>
            </div>            
        </div>
    );    
}
export default JumbotronComponent;