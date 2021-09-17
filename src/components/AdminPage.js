import React, { Component } from 'react'

export class AdminPage extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {

        return (

            <div className="form-container">
                <div>
                    <span style={{ padding: "12px", marginLeft: "10px" }} ><h1>Report Complaint</h1>
                    </span>

                    <p>
                        Dolapo Sony with Email Dbcrow@gmail.com has<br />
                        a recorded complaint of 3 times
                    </p>
                </div>

                <br />
                <div className="text-right">
                    <button className="btn btn-primary" onClick={this.continue}
                        style={{
                            color: "white", borderRadius: "10%",
                            backgroundColor: "#00B87C",
                            padding: "12px",
                            marginLeft: "90px"
                        }}  >View Complaint</button>
                </div>
            </div >


        )
    }
}

export default AdminPage
