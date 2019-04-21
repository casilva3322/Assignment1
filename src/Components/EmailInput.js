import React from 'react';

const EmailInput = (props) => {

    let email = '';    

    const onEmailChange = (event) => {
        
        email = event.target.value;

        
        props.onEmailInputChange(email);        

    };

    return(
        <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email Address</label>
        <input 
            aria-describedby="emailHelp" 
            className="form-control" 
            id="exampleInputEmail1" 
            onChange={onEmailChange}
            placeholder="Enter email"
            type="email"
            value={email}  />
        </div>
    );
};

export default EmailInput;