import React, { Component } from 'react';
import * as firebase from 'firebase';

class LogoutForm extends Component {

  
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
            results: '',
        }

        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.initFirebase = this.initFirebase.bind(this);

        this.firebaseapp = this.initFirebase();

    }

    initFirebase(){

            

        return firebase.initializeApp(
            {
                apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
                authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
                databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
                projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
                storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
                messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
              }
        );

    }

    //get info
    onFormSubmit(event){

        //don't refresh page
        event.preventDefault();

        const results = "Email address is: " + this.state.email;

        this.setState( () => {
                return {
                    results
                };
            }
        );

       
        this.props.onFormSubmit(results);

    }

    render() {
        return (
            <div>
                <h2>{this.props.form_name}</h2>
                <form onSubmit={this.onFormSubmit}>
                    <p>{this.props.user.displayName} is logged in</p>
                    <button type="submit" 
                            className="btn btn-primary">Logout</button>
                </form>
            </div>            
        );
    };
}

export default LogoutForm;