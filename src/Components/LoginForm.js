import React, { Component } from 'react';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';

class LoginForm extends Component {

   
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
            user: {},
        }

        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onEmailChange(email){
        
        console.log("Email from the child: " + email);

        this.setState( () => {
                return {
                    email
                };
            }
        );

        console.log("Password from the parent state: " + this.state.email);
    }

    //method inheritance
    onPasswordChange(password){
        
        console.log("From the child: " + password);

        this.setState( () => {
                return {
                    password
                };
            }
        );

        console.log("Password from the parent state: " + this.state.password);
    }    

    onFormSubmit(event){

        event.preventDefault();

        //obeject to send back to app
        const user = {
            email: this.state.email,
            password: this.state.password
        };

        this.setState( () => {
                return {
                    user
                };
            }
        );

        console.log(`LOGIN_FORM: ${user.email} has entered a password for authentication`);        

        //inheriting state from parent
        this.props.onFormSubmit(user);

    }

    render() {
        return (
            <div>
                <h2>{this.props.form_name}</h2>
                <form onSubmit={this.onFormSubmit}>
                    <EmailInput onEmailInputChange={this.onEmailChange} />
                    <PasswordInput onPasswordInputChange={this.onPasswordChange} />
                    <button type="submit" 
                            className="btn btn-primary">Login</button>
                </form>
            </div>            
        );
    };
}

export default LoginForm;