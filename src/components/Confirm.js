import React, { Component } from 'react'

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const {
            values: { name, offence, text }
        } = this.props;

        return (
            <div className="form-container">
                <h1 className="mb-5">Confirm</h1>
                <ul class="list-group">
                    <li class="list-group-item">Name: {name}</li>
                    <li class="list-group-item">Offence: {offence}</li>

                    <li class="list-group-item">Date of Occurence: {text}</li>
                </ul>

                <br /><br />



                <div className="row" style={{ display: "flex", flexDirection: "flex-end" }} >
                    <div className="col-6">
                        <button className="btn btn-danger" onClick={this.back} style={{ color: "white", borderRadius: "10%", backgroundColor: "#00B87C", padding: "12px" }}>Back</button>
                    </div>
                    <div className="col-6 text-right" >
                        <button className="btn btn-primary"
                            onClick={this.continue}
                            style={{
                                color: "white",
                                backgroundColor: " #00B87C",
                                padding: "12px",
                                borderRadius: "10%",
                                marginLeft: "150px"
                            }} >Confirm</button>
                    </div>


                </div>
            </div>
        )
    }
}

export default Confirm
