import React from "react";
// images
import logo from '../../assets/logo.png';
import facebook from '../../assets/facebook.png';
import insta from '../../assets/instagram.png';
import twitter from '../../assets/twitter.png';
import linkedin from '../../assets/linkedin.png';
import topImg from '../../assets/footer-top.png'
// scss
import './_footer.scss';
const Footer = () => {
    return (
        <footer>
            <img src={topImg} />
            <div className="container">
                <div className="row ">
                   
                    <div className="col-xl-3 col-lg-3  col-md-6  partOne">
                        <img src={logo} className="mb-3" />
                        <p className="mb-3">Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et.</p>
                        <div className="row cantact">
                            <div className="col-3">
                                <i class="fa-solid fa-phone"></i>
                            </div>
                            <div className="col-9">
                                <span>Contact Us</span>
                                <h4>+01123 56 7890</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-6 partTwo">
                        <h3>Quick Links</h3>
                        <p></p>
                        <ul >
                            <li>
                                <a href="#">About Us</a>
                            </li>
                            <li>
                                <a href="#">Services</a>
                            </li>
                            <li>
                                <a href="#">Booking</a>
                            </li>
                            <li>
                                <a href="#">Faq's</a>
                            </li>
                            <li><a href="#">Blogs</a>
                            </li>
                            <li>
                                <a href="#">Out Team</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-xl-3  col-lg-3  col-6 partTwo">
                        <h3>Our Service</h3>
                        <ul>
                            <li>
                                <a href="#">Dental Care</a>
                            </li>
                            <li>
                                <a href="#">Cardiac Clinic</a>
                            </li>
                            <li>
                                <a href="#">Massege Therapy</a>
                            </li>
                            <li>
                                <a href="#">Cardiology</a>
                            </li>
                            <li><a href="#">Precise Diagnosis</a>
                            </li>
                            <li>
                                <a href="#">Abmbulance Services</a>
                            </li>
                        </ul>
                    </div>
                    <div className=" col-xl-3 col-lg-3  col-md-6 col-sm-12 partThree">
                        <h3>Subcribe</h3>
                        <form >
                            <input type="email" placeholder="Email Address" className="my-4" />
                            <button type="submit">Subcribe Now</button>
                        </form>
                        <ul className="d-flex mt-2 ">
                            <li>
                                <a href="#"><img src={facebook} /></a>
                            </li>
                            <li>
                                <a href="#"><img src={twitter} /></a>
                            </li>
                            <li>
                                <a href="#"><img src={insta} /></a>
                            </li>
                            <li>
                                <a href="#"><img src={linkedin} /></a>
                            </li>

                        </ul>
                    </div>
                </div>
                <hr />
                <div className="footer-bottom">
                    <div className="row">
                        <div className="col-12 text-center">
                            <p>Copyright © 2023 Design & Developed by
                                <a href="https://themeforest.net/user/themetrades" rel="noreferrer" target="_blank">ThemeTrades</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;