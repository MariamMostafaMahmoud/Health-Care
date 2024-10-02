import React from "react";
// component
import Bannar from "../components/bannar/bannar.";
import FormContact from "./formContact";
// css
import './_contact.scss'
// photo
import landline from '../assets/landline.png';
import Email from '../assets/email.png';
import loca from '../assets/loca.png';



const ContactUS = () => {
    return (
        <>
            <section className="my-5">
                <div className="container-lg container-fluid-md">
                    <div className="row contact-bg">
                        <div className="col-lg-6 mb-30 conact-form">
                            <FormContact />
                        </div>
                        <div className="col-lg-6 mb-30">
                            <div className="rightSide">
                                <div className="overlay">
                                    <div className="pt-5 ps-5">
                                        <h4 className="mb-4 w-50">Contact Us For Any Informations</h4>
                                        <div className="icon-box">
                                            <h6><i class="fa-solid fa-map-location-dot"></i>Location</h6>
                                            <p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
                                        </div>
                                        <div className="icon-box">
                                            <h6><i class="fa-solid fa-id-card"></i>Email & Phone</h6>
                                            <a>info@yourdomain.com</a>
                                            <p>(+68) 120034509</p>
                                        </div>
                                        <div className="icon-box">
                                            <h6><i class="fa-solid fa-globe"></i>Follow Us</h6>
                                            <div className="icons">
                                                <ul className="d-flex">
                                                    <li>
                                                        <a><i class="fa-brands fa-twitter"></i></a>

                                                    </li>
                                                    <li>
                                                        <a><i class="fa-brands fa-instagram"></i>
                                                        </a>

                                                    </li><li>
                                                        <a> <i class="fa-brands fa-linkedin"></i></a>

                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-between my-4">
                        <div className="col-lg-4 col-md-6 contactUs one">
                            <div className="feature-bx">
                                <img src={landline} alt="landline" />
                            </div>
                            <div className="icon-content">
                                <h5 className="ttr-title">Contact Number</h5>
                                <p>+001 123 456 790</p>
                                <p>+002 3424 44 00</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 contactUs two">
                            <div className="feature-bx">
                                <img src={Email} alt="email" />
                            </div>
                            <div className="icon-content">
                                <h5 className="ttr-title">Email Address</h5>
                                <p>info@yourdomain.com</p>
                                <p>example@support.com</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12 contactUs three">
                            <div className="feature-bx">
                                <img src={loca} alt="location" />
                            </div>
                            <div className="icon-content">
                                <h5 className="ttr-title">Address</h5>
                                <p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
export default ContactUS;