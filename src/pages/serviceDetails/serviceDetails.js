import React from "react";
import './_serviceDetails.scss';
import '../../components/FAQ/_faq.scss';
// img
import serviceImg from '../../assets/pic1.jpg';
import pdf from '../../assets/pdf.png';
const ServiceDetails = () => {
    return (
        <section className="service-details my-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mb-30 l-side">
                        <div className="mb-3">
                            <img src={serviceImg} alt="serviceImg" className="serviceImg" />
                        </div>
                        <div className="service-body">
                            <div className="head-text mb-30">
                                <h2 className="title mb-15">Why Medical Had Been So Popular Till</h2>
                                <p className="mb-0">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                                </p>
                            </div>
                            <div className="row align-items-center part-service">
                                <div className="col-md-6 mb-30 my-4">
                                    <ul className="list-check ps-0">
                                        <li>
                                            <i class="fa-solid fa-square-check"></i>
                                            <span>Then along come two they</span>
                                        </li>
                                        <li>
                                            <i class="fa-solid fa-square-check"></i>
                                              <span>That’s just a little bit more than</span>
                                        </li>
                                        <li>
                                            <i class="fa-solid fa-square-check"></i>
                                            <span>Standard dummy text ever since</span>
                                        </li>
                                        <li>
                                            <i class="fa-solid fa-square-check"></i>
                                            <span>Simply dummy text of the printing</span>
                                        </li>
                                        <li>
                                            <i class="fa-solid fa-square-check"></i>
                                            <span>Make a type specimen book</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-6 mb-30 prograss">
                                    <div className="skillbar-box ">
                                        <h6 className="title">Advanced Technology</h6>
                                        <div className="skillbar appear">
                                            <p className="skillbar-bar " style={{ width:'96% '}}></p>
                                            <span className="skill-bar-percent">96%</span>
                                        </div>
                                    </div>
                                    <div className="skillbar-box">
                                        <h6 className="title">Certified Engineers</h6>
                                        <div className="skillbar appear">
                                            <p className="skillbar-bar " style={{ width: '79% ' }}></p>
                                            <span className="skill-bar-percent">79%</span>
                                        </div>
                                    </div>
                                    <div className="skillbar-box">
                                        <h6 className="title">6 years Experience</h6>
                                        <div className="skillbar appear">
                                            <p className="skillbar-bar " style={{ width: '75% ' }} ></p>
                                            <span className="skill-bar-percent">75%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="service-body">
                            <div className="head-text mb-5">
                                <h4 className="title mb-10">Popular Questions</h4>
                                <p>
                                    Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                                </p>
                            </div>
                            <div className="accordion" id="accordionOne">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            How do I withdraw from a subject?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionOne">
                                        <div className="accordion-body">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            How do I withdraw from a subject?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionOne">
                                        <div className="accordion-body">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            How do I withdraw from a subject?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionOne">
                                        <div className="accordion-body">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            How do I withdraw from a subject?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionOne">
                                        <div className="accordion-body">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        </div>
                                    </div>
                                </div>

                                
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                            How do I withdraw from a subject?
                                        </button>
                                    </h2>
                                    <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionOne">
                                        <div className="accordion-body">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 r-side z-1">
                        <aside className="sticky-top pb-1">
                            <div className="widget">
                                <ul className="service-menu ps-0">
                                    <li className="active">
                                        <a href="#">
                                            <span>Engine Diagnostics</span>
                                            <i className="fa fa-angle-right"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span>Lube Oil and Filters</span>
                                            <i className="fa fa-angle-right"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span>Belts and Hoses</span>
                                            <i className="fa fa-angle-right"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span>Air Conditioning</span>
                                            <i className="fa fa-angle-right"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span>Brake Repair</span>
                                            <i className="fa fa-angle-right"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span>Tire and Wheel Services</span>
                                            <i className="fa fa-angle-right"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="widget">
                                <div className="download-bx">
                                    <h5 className="title-head">Download</h5>
                                    <a className="download-link" href="#">
                                        <img src={pdf} alt="Download" />
                                       <div className="download-body">
                                            <h5 class="title">Download our Brochures</h5>
                                            <span>Download</span>
                                       </div>
                                    </a>
                                    <a className="download-link" href="#">
                                        <img src={pdf} alt="Download" />
                                        <div className="download-body">
                                            <h5 class="title">Download our Brochures</h5>
                                            <span>Download</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default ServiceDetails;