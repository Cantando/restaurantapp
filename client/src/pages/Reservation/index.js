import React, { useEffect, useState, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './reservation.css'
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Footer from "../Footer";





function Reservation() {
    return (
        <div className="Reservation">

            <h1 className="res-title">Reservations</h1>
            <form className="res-form">
                <div className="form-row">
                    <div className=" form-group col-md-4">
                        <label for="inputName">FIRST NAME:</label>
                        <input type="text" className="form-control" id="inputName" placeholder="John Smith" />
                    </div>
                    <div className="form-group col-md-4">
                        <label for="inputName">LAST NAME:</label>
                        <input type="text" className="form-control" id="inputName" placeholder="John Smith" />
                    </div>
                    <div className="form-group col-md-4">
                        <label for="inputEmail">EMAIL:</label>
                        <input type="email" className="form-control" id="inputEmail" placeholder="name@example.com" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-3">
                        <label for="inputDate">DATE:</label>
                        <input type="date" className="form-control" id="inputDate" />
                    </div>                  
                    <div className="form-group col-md-3">
                        <label for="inputNumber">TIME:</label>
                        <input type="time" min="1" className="form-control" id="inputNumber" placeholder="1">
                        </input>
                    </div>
                    <div className="form-group col-md-3">
                        <label for="inputNumber">PARTY OF:</label>
                        <input type="number" min="1" className="form-control" id="inputNumber" placeholder="1">
                        </input>
                    </div>
                    <div className="form-group col-md-3">
                        <label for="inputPhone">PHONE:</label>
                        <input type="tel" className="form-control" id="inputPhone" placeholder="99123456" />
                    </div>
                </div>
                <div className="form-group" >
                    <label for="inputTextarea">MESSAGE:</label>
                    <textarea className="form-control" id="inputTextarea" rows="7" placeholder="Additional details">
                    </textarea>


                </div>
                <button type="submit" className="btn btn-danger">SUBMIT</button>
            </form>

            <footer className="page-footer" />
            <div className="container">
                <a className="navbar-brand animated pulse d-block text-center m-0 p-0" href="#" />
                <div className="row" />
                <div className="col-md-3 " />
                <h5 className="page-footer-title">OPENING HOURS</h5>
                <p className="mb-0">Open daily from 11am-10pm</p>
                <p className="mb-0">Lunch: Daily from 12pm - 3pm</p>
                <p className="mb-0">Dinner: Daily from 4pm - 11pm</p>
            </div>


            <div id="googleMapContainer" class="homepage-google-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d636003.0536415018!2d-73.48137891401878!3d39.1479274133356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c61acd289889%3A0x7a7130f3eb06a3db!2sMamma%20Maria%20Ristorante%20Italiano!5e0!3m2!1sen!2sus!4v1598229617326!5m2!1sen!2sus"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
  <Footer/>
        </div>
   
    )
}


export default Reservation;





