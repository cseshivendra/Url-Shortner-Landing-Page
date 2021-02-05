import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/styles.css'

import CreateURL from "./CreateURL";
import  Dashboard from "./Dashboard";
import Help from "./Help";
class UserApp extends Component {
    componentDidMount() {

        console.log("check")
    }

    render() {
        return (
            <Router>
            <div className=" row">
                <div className="col-4">
                    <div className="row">
                        
                        <div className="col-12 btn btn-primary p-2" style={{padding:"100px"}}>
                            <Link to="/user/createURL" >

                            <p>Create URL</p>
                            </Link>
                        </div>
                        <div className="col-12 btn btn-primary p-2" style={{padding:"100px"}}>
                        
                        <Link to="/user/dashboard">
                        <p>View Dashboard</p>
                        </Link>
                        </div>
                        <div className="col-12 btn btn-primary  p-2" style={{padding:"100px"}}>
                       
                        <Link to="/user/help">
                        <p>Help</p>
                        </Link>
                        </div>
                    </div>
                </div>
                <div className="col-8">
               
                        <Switch>
                            <Route path="/user/createURL" component={CreateURL } />
                            <Route path="/user/dashboard" component={ Dashboard } />
                            <Route path="/user/help" component={ Help } />

                        </Switch>

                    
                </div>
            </div>
            </Router>

        );
    }
}

ReactDOM.render(<UserApp/>, document.getElementById("app"))