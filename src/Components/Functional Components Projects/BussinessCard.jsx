import React, { Component } from 'react';

export class BusinessCard extends Component {
    constructor() {
        super()
        this.state = {
            Cname: '',
            Designation: '',
            Fname: '',
            Address: '',
            Mnumber: '',
            Email: '',
            Wlink: '',
            cardDetails: []
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = () => {
        const newCard = {
            Cname: this.state.Cname,
            Designation: this.state.Designation,
            Fname: this.state.Fname,
            Address: this.state.Address,
            Mnumber: this.state.Mnumber,
            Email: this.state.Email,
            Wlink: this.state.Wlink,
        }
        console.log(newCard);

        const updatedCardDetails = [...this.state.cardDetails, newCard];

        this.setState({
            cardDetails: updatedCardDetails,
            Cname: '',
            Designation: '',
            Fname: '',
            Address: '',
            Mnumber: '',
            Email: '',
            Wlink: ''
        })
    }
    downloadCard = (card) => {
        console.log(card);
        alert(`Company Name: ${card.Cname}\nDesignation: ${card.Designation}\nFounder Name: ${card.Fname}\nAddress: ${card.Address}\nMobile Number: ${card.Mnumber}\nEmail: ${card.Email}\nWebsite Link: ${card.Wlink}`);
    }

    render() {
        return (
            <>
                <div className="text-center text-light">
                    <h4 className='text-dark'>Business Card Maker</h4>
                    <button type="button" className="mt-2 btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        Click To Fill Form
                    </button>
                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div style={{ border: '1px solid white' }} className="modal-content bg-dark">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="staticBackdropLabel">Business Card Maker - Fill The Inputs</h1>
                                    <button type="button" className="btn-close bg-light" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body pb-0">
                                    <div className="mb-3 row">
                                        <label htmlFor="exampleInputCname1" className="form-label col-4 mt-1">Company Name : </label>
                                        <input name='Cname' value={this.state.Cname} onChange={this.handleChange} style={{ width: '8cm', background: 'transparent' }} type="text" className="form-control text-light" id="exampleInputCname1" aria-describedby="CnameHelp" />
                                    </div>
                                    <div className="mb-3 row">
                                        <label htmlFor="exampleInputDesignation1" className="form-label col-4 mt-1">Designation : </label>
                                        <input name='Designation' value={this.state.Designation} onChange={this.handleChange} style={{ width: '8cm', background: 'transparent' }} type="text" className="form-control text-light" id="exampleInputDesignation1" aria-describedby="DesignationHelp" />
                                    </div>
                                    <div className="mb-3 row">
                                        <label htmlFor="exampleInputFname1" className="form-label col-4 mt-1">Founder Name : </label>
                                        <input name='Fname' value={this.state.Fname} onChange={this.handleChange} style={{ width: '8cm', background: 'transparent' }} type="text" className="form-control text-light" id="exampleInputFname1" aria-describedby="FnameHelp" />
                                    </div>
                                    <div className="mb-3 row">
                                        <label htmlFor="exampleInputAddress1" className="form-label col-4 mt-1">Address : </label>
                                        <input name='Address' value={this.state.Address} onChange={this.handleChange} style={{ width: '8cm', background: 'transparent' }} type="text" className="form-control text-light" id="exampleInputAddress1" aria-describedby="AddressHelp" />
                                    </div>
                                    <div className="mb-3 row">
                                        <label htmlFor="exampleInputMnumber1" className="form-label col-4 mt-1">Mobile Number : </label>
                                        <input name='Mnumber' value={this.state.Mnumber} onChange={this.handleChange} style={{ width: '8cm', background: 'transparent' }} type="number" className="form-control text-light" id="exampleInputMnumber1" aria-describedby="MnumberHelp" />
                                    </div>
                                    <div className="mb-3 row">
                                        <label htmlFor="exampleInputEmail1" className="form-label col-4 mt-1">E-Mail : </label>
                                        <input name='Email' value={this.state.Email} onChange={this.handleChange} style={{ width: '8cm', background: 'transparent' }} type="email" className="form-control text-light" id="exampleInputEmail1" aria-describedby="EmailHelp" />
                                    </div>
                                    <div className="mb-3 row">
                                        <label htmlFor="exampleInputWeblink1" className="form-label col-4 mt-1">Website Link : </label>
                                        <input name='Wlink' value={this.state.Wlink} onChange={this.handleChange} style={{ width: '8cm', background: 'transparent' }} type='url' className="form-control text-light" id="exampleInputWeblink1" aria-describedby="WeblinkHelp" />
                                    </div>
                                </div>
                                <div className="p-1 modal-footer">
                                    <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-outline-light" onClick={this.handleSubmit}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ---------------------------------------------------------------------------------------- */}
                    <div className="m-3 row d-flex justify-content-center">
                        {this.state.cardDetails && this.state.cardDetails.length > 0 && this.state.cardDetails.map((item, index) => (
                            <div key={index} className="card bg-dark text-light m-3 col-6" style={{ width: '25rem' }}>
                                <div className="card-body">
                                    <h5 className="card-title">Company Name : {item.Cname}</h5>
                                    <h6 className="card-subtitle mt-2 mb-3"><strong>Designation :</strong> {item.Designation}</h6>
                                    <p className="card-text mb-3"><strong>Founder Name : </strong> {item.Fname}</p>
                                    <p className="card-text mb-3"><strong>Address : </strong> {item.Address}</p>
                                    <p className="card-text mb-3"><strong>Mobile Number : </strong> {item.Mnumber}</p>
                                    <p className="card-text mb-3"><strong>Email : </strong> {item.Email}</p>
                                    <p className="card-text mb-3"><strong>Website Link : </strong> <a href={item.Wlink} target="_blank">{item.Wlink}</a></p>
                                    <button onClick={() => { this.downloadCard(item) }} className="btn btn-outline-light" type="button">Download Card</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        )
    }
}

export default BusinessCard;
