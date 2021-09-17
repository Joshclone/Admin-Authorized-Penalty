import React, { Component } from 'react'

export class AuthorizePenalty extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, inputChange } = this.props;

        return (

            <div className="form-container">
                <div className="main-container" style={{ margin: "0px ", padding: "0px", }}>
                    <h1 className="mb-5">Report Complaint</h1>

                    <br />

                    <span style={{
                        backgroundColor: "#00B87C",
                        display: "flex",
                        flexDirection: "space-around",
                        borderBlock: "1px solid green",
                    }}>
                        <b>Offender</b>
                        <b style={{ marginLeft: "13rem" }}>Date of occurence</b>
                    </span><div>
                        <br />

                    </div>
                    <div style={{ display: "flex", flexDirection: "space-inbetween" }}>
                        <div>
                            <b>Samuel Eze</b>
                        </div>
                        <div>
                            <p className="date">
                                Mon, August 2, 2020
                            </p>
                        </div>
                        <div className="col-6 text-right" >
                            <button className="btn btn-primary"
                                onClick={this.continue}
                                style={{
                                    color: "#00B87C",
                                    backgroundColor: " fff",
                                    padding: "12px",
                                    borderRadius: "10%",
                                    marginLeft: "150px"
                                }} >View Details</button>

                        </div>

                    </div>


                    <br />


                    <div style={{ display: "flex", flexDirection: "space-inbetween" }}>
                        <div>
                            <b>Samuel Eze</b>
                        </div>
                        <div>
                            <p className="date">
                                Mon, August 2, 2021
                            </p>
                        </div>
                        <button className="btn btn-primary"
                            onClick={this.continue}
                            style={{
                                color: "#00B87C",
                                backgroundColor: " fff",
                                padding: "12px",
                                borderRadius: "10%",
                                marginLeft: "150px"
                            }} >View Details</button>


                    </div>
                    <br />

                    <div style={{ display: "flex", flexDirection: "space-inbetween" }}>

                        <div>
                            <b>Samuel Eze</b>
                        </div>
                        <div>
                            <p className="date">
                                Mon, August 2, 2021
                            </p>
                        </div>
                        <button className="btn btn-primary"
                            onClick={this.continue}
                            style={{
                                color: "#00B87C",
                                backgroundColor: " fff",
                                padding: "12px",
                                borderRadius: "10%",
                                marginLeft: "150px"
                            }} >View Details</button>

                    </div>
                    <br />


                    <br />










                    <div className="row" style={{ display: "flex", flexDirection: "flex-end" }} >

                        <div className="col-6 text-right" >
                            <button className="btn btn-primary" onClick={this.continue} style={{ color: "white", borderRadius: "10%", backgroundColor: "#00B87C", padding: "12px", marginLeft: "140px" }} >Authorize Penalty</button>
                        </div>
                    </div>

                </div >
            </div>
        )
    }
}

export default AuthorizePenalty
