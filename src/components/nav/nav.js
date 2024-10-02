import React from "react";
import { Link } from "react-router-dom";
// React Bootstrap
import { Navbar, Nav, Container, NavDropdown, Collapse, Row, Col, Button, Form } from "react-bootstrap";
// file css
import './_nav.scss';
// images
import logo from '../../assets/logo.png'

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Navs = () => {
    return (
        <nav className="navbar navbar-expand-lg mt-1 sticky">
            <div className="container-fluid mx-xxl-5 mx-xl-5 mx-lg-4 mx-md-4 ">
                <Link className="navbar-brand" to="/"><img src={logo} /></Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/Home">Home</Link>
                        </li>
                        <li className="nav-item dropdown ">
                            <Link className="nav-link " role="button" data-bs-toggle="dropdown" aria-expanded="false" id="one">
                                Pages
                                <i className="fa-solid fa-plus"></i>
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/About">About us</Link></li>
                                <li><Link className="dropdown-item" to="/OurTeam">Our Teams</Link></li>
                                <li><Link className="dropdown-item" to="/FAQ">FAQ's</Link></li>
                                <li><Link className="dropdown-item" to="/Booking">Booking</Link></li>
                                <li><Link className="dropdown-item" to="/Error">Error 404</Link></li>
                                {/* <li><Link className="dropdown-item" to="/Login">Login / register</Link></li> */}
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Services
                                <i className="fa-solid fa-plus"></i>
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/Services">Services</Link></li>
                                <li><Link className="dropdown-item" to="/ServicesDetails">Services Details</Link></li>

                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link " to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Blogs
                                <i className="fa-solid fa-plus"></i>
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/Blog">Blog</Link></li>
                                <li><Link className="dropdown-item" to="/BlogDetails">Blog Details</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/Contact">Contact us</Link>
                        </li>
                        {/* <li className="nav-item ">
                            <a className="nav-link faMagnifyingGlass" aria-current="page" ><FontAwesomeIcon icon={faMagnifyingGlass} /></a>
                        </li> */}
                        <li className="nav-item d-xl-none d-lg-none d-xxl-block">
                            <a className="nav-link  faPhone" aria-current="page" href="https://wa.link/xe61vu" target="_blank"><FontAwesomeIcon icon={faPhone} /></a>
                        </li>
                        <li className="nav-item d-xl-none d-lg-none d-xxl-block">
                            <a className="nav-link phoneNumber" aria-current="page" href="https://wa.link/xe61vu" target="_blank">(+01) 999 888 777</a>
                        </li>

                    </ul>
                    <Link to="/Contact">
                        <button className="btn btn-outline-success d-flex d-none d-md-none d-lg-flex contactBtn" type="submit">Contact us
                            <span>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </span>
                        </button>
                    </Link>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
    )
}

export default Navs;