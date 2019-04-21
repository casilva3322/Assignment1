import React, { Component } from 'react';

//my imports
import JumbotronComponent from './Components/JumbotronComponent';
import LoginForm from './Components/LoginForm';
import LogoutForm from './Components/LogoutForm';

import PizzaForm from './Components/PizzaForm';
import PizzaRestaurants from './Components/PizzaRestaurants';
import firebase from './Firebase';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.app_name = "Cheap Pizza";
        this.order_date = new Date();
        
        this.state = {
            lng: -98.5795,
            lat: 39.828175,
            uid: '',
            userDisplayName: '',
            userEmail: '',
            userAuthenticated: false
        };

        this.handleLoginFormSubmission = this.handleLoginFormSubmission.bind(this);
        this.handleMapCoordsUpdate = this.handleMapCoordsUpdate.bind(this);

        console.log(this.props.firebaseapp);

    }

    handleMapCoordsUpdate(coords){

        console.log(`Coords from child: LAT ${coords.lat} and LNG ${coords.lng}`)

        this.setState( () => {
                return {
                    lat: coords.lat,
                    lng: coords.lng,
                };
            }
        );
    }

    handleLoginFormSubmission(userdata){

    }    

    render() {

        //unpacking the object
        const { lng, lat, } = this.state;

        let login_content;

        //we'll conditionally show login or logout
        if(this.state.userAuthenticated === false){
            login_content = <LoginForm firebase={this.firebaseapp}
                                       form_name="Login"
                                       onFormSubmit={this.handleLoginFormSubmission}  />
        }else{
            login_content= <LogoutForm />
        }

        return (
            <div className="container">
            <div className="row">
                <JumbotronComponent app_name={this.app_name}
                                    order_date={this.order_date} />
            </div>
            <div className="row">
                {login_content}
            </div>                   
            
            <div className="row">
                <PizzaForm />
            </div>
            <div className="row">
                <PizzaRestaurants coords={
                            {
                                lat: lat,
                                lng: lng,
                            }}
                            title="Pizza Locations" />
            </div>        
            <div id="formresults" className="row"></div>
            </div>
        );
    }
}

export default App;