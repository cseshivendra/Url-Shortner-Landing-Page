import React, { Component } from 'react';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <div className="container">

                <div className="row">

                    <div className="col-6 bg-success">
                        <h4 style={{width:"100px",height:"120px"}} >Total Links Created: 100</h4>

                    </div>
                    <div className="col-6 bg-success">
                    <h4 style={{width:"100px",height:"120px"}}>Total clicks: 1200</h4>

                    </div>

                </div>
                <div className="row">

                    <div style={{width:"6000px",height:"150px"}} className="col-6 bg-info">
                       
                    </div>

                </div>

                </div>
            </div>
        );
    }
}

export default Dashboard;