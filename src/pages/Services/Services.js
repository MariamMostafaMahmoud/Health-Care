import React from "react";
// scss
import './_services.scss';
import CardNum from "../../components/cardnum/card";
import OurTeam from "../Ourteam/ourteam";
import News from "../../components/news/news";
const Service = () => {
    return (
        <section>
            <div className="container">
                <div className="first my-5">
                    <div className="row row-cols-3">
                        <div className="col-lg-4 col-12 col-md-6 ">
                            <div className="card cardone">
                                <div className="feature-box-xl mb-20"><span className="icon-cell">
                                    <svg enable-background="new 0 0 512 512" height="80" viewBox="0 0 512 512" width="80" xmlns="http://www.w3.org/2000/svg"><g fill="#020288"><path d="m311.734 208.706h-25.074v-25.083c0-5.522-4.478-10-10-10h-41.32c-5.523 0-10 4.478-10 10v25.083h-25.074c-5.523 0-10 4.478-10 10v41.33c0 5.522 4.477 10 10 10h25.074v25.082c0 5.522 4.477 10 10 10h41.32c5.522 0 10-4.478 10-10v-25.082h25.074c5.522 0 10-4.478 10-10v-41.33c0-5.522-4.477-10-10-10zm-10 41.33h-25.074c-5.522 0-10 4.478-10 10v25.082h-21.32v-25.082c0-5.522-4.477-10-10-10h-25.074v-21.33h25.074c5.523 0 10-4.478 10-10v-25.083h21.32v25.083c0 5.522 4.478 10 10 10h25.074z">
                                    </path>
                                        <path d="m330.566 120.217v-51.05c0-5.522-4.478-10-10-10h-14.759v-49.167c0-5.522-4.478-10-10-10h-79.616c-5.523 0-10 4.478-10 10v49.167h-14.758c-5.523 0-10 4.478-10 10v51.049c-37.43 23.089-62.429 64.475-62.429 111.589v270.195c0 5.522 4.477 10 10 10h253.992c5.522 0 10-4.478 10-10v-270.194c0-47.115-24.999-88.501-62.43-111.589zm-104.374-100.217h19.808v2.559c0 5.522 4.477 10 10 10 5.522 0 10-4.478 10-10v-2.559h19.808v39.167h-59.616zm-24.759 59.167h109.133v30.965c-15.03-6.023-31.427-9.338-48.583-9.338h-11.967c-17.156 0-33.552 3.315-48.583 9.338zm171.563 412.833h-233.992v-260.194c0-61.212 49.8-111.012 111.012-111.012h11.967c61.213 0 111.013 49.8 111.013 111.012z">
                                        </path><path d="m181.465 350.096h149.069v102.32h-149.069z" fill="#a4fcc4">
                                        </path>
                                    </g>
                                    </svg>
                                </span>
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title">Surgery</h3>
                                    <p className="card-text">Phasellus venenatis porta rhoncus. Integer et viverra felis.</p>
                                    <a href="#" className="btn btn-primary">view more</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12 col-md-6 ">
                            <div className="card cardone">
                                <div className="feature-box-xl mb-20"><span className="icon-cell">
                                    <svg enable-background="new 0 0 512 512" height="80" viewBox="0 0 512 512" width="80" xmlns="http://www.w3.org/2000/svg"><g fill="#020288"><path d="m311.734 208.706h-25.074v-25.083c0-5.522-4.478-10-10-10h-41.32c-5.523 0-10 4.478-10 10v25.083h-25.074c-5.523 0-10 4.478-10 10v41.33c0 5.522 4.477 10 10 10h25.074v25.082c0 5.522 4.477 10 10 10h41.32c5.522 0 10-4.478 10-10v-25.082h25.074c5.522 0 10-4.478 10-10v-41.33c0-5.522-4.477-10-10-10zm-10 41.33h-25.074c-5.522 0-10 4.478-10 10v25.082h-21.32v-25.082c0-5.522-4.477-10-10-10h-25.074v-21.33h25.074c5.523 0 10-4.478 10-10v-25.083h21.32v25.083c0 5.522 4.478 10 10 10h25.074z">
                                    </path>
                                        <path d="m330.566 120.217v-51.05c0-5.522-4.478-10-10-10h-14.759v-49.167c0-5.522-4.478-10-10-10h-79.616c-5.523 0-10 4.478-10 10v49.167h-14.758c-5.523 0-10 4.478-10 10v51.049c-37.43 23.089-62.429 64.475-62.429 111.589v270.195c0 5.522 4.477 10 10 10h253.992c5.522 0 10-4.478 10-10v-270.194c0-47.115-24.999-88.501-62.43-111.589zm-104.374-100.217h19.808v2.559c0 5.522 4.477 10 10 10 5.522 0 10-4.478 10-10v-2.559h19.808v39.167h-59.616zm-24.759 59.167h109.133v30.965c-15.03-6.023-31.427-9.338-48.583-9.338h-11.967c-17.156 0-33.552 3.315-48.583 9.338zm171.563 412.833h-233.992v-260.194c0-61.212 49.8-111.012 111.012-111.012h11.967c61.213 0 111.013 49.8 111.013 111.012z">
                                        </path><path d="m181.465 350.096h149.069v102.32h-149.069z" fill="#a4fcc4">
                                        </path>
                                    </g>
                                    </svg>
                                </span>
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title">Surgery</h3>
                                    <p className="card-text">Phasellus venenatis porta rhoncus. Integer et viverra felis.</p>
                                    <a href="#" className="btn btn-primary">view more</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12 col-md-6 ">
                            <div className="card cardone">
                                <div className="feature-box-xl mb-20"><span className="icon-cell">
                                    <svg enable-background="new 0 0 512 512" height="80" viewBox="0 0 512 512" width="80" xmlns="http://www.w3.org/2000/svg"><g fill="#020288"><path d="m311.734 208.706h-25.074v-25.083c0-5.522-4.478-10-10-10h-41.32c-5.523 0-10 4.478-10 10v25.083h-25.074c-5.523 0-10 4.478-10 10v41.33c0 5.522 4.477 10 10 10h25.074v25.082c0 5.522 4.477 10 10 10h41.32c5.522 0 10-4.478 10-10v-25.082h25.074c5.522 0 10-4.478 10-10v-41.33c0-5.522-4.477-10-10-10zm-10 41.33h-25.074c-5.522 0-10 4.478-10 10v25.082h-21.32v-25.082c0-5.522-4.477-10-10-10h-25.074v-21.33h25.074c5.523 0 10-4.478 10-10v-25.083h21.32v25.083c0 5.522 4.478 10 10 10h25.074z">
                                    </path>
                                        <path d="m330.566 120.217v-51.05c0-5.522-4.478-10-10-10h-14.759v-49.167c0-5.522-4.478-10-10-10h-79.616c-5.523 0-10 4.478-10 10v49.167h-14.758c-5.523 0-10 4.478-10 10v51.049c-37.43 23.089-62.429 64.475-62.429 111.589v270.195c0 5.522 4.477 10 10 10h253.992c5.522 0 10-4.478 10-10v-270.194c0-47.115-24.999-88.501-62.43-111.589zm-104.374-100.217h19.808v2.559c0 5.522 4.477 10 10 10 5.522 0 10-4.478 10-10v-2.559h19.808v39.167h-59.616zm-24.759 59.167h109.133v30.965c-15.03-6.023-31.427-9.338-48.583-9.338h-11.967c-17.156 0-33.552 3.315-48.583 9.338zm171.563 412.833h-233.992v-260.194c0-61.212 49.8-111.012 111.012-111.012h11.967c61.213 0 111.013 49.8 111.013 111.012z">
                                        </path><path d="m181.465 350.096h149.069v102.32h-149.069z" fill="#a4fcc4">
                                        </path>
                                    </g>
                                    </svg>
                                </span>
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title">Surgery</h3>
                                    <p className="card-text">Phasellus venenatis porta rhoncus. Integer et viverra felis.</p>
                                    <a href="#" className="btn btn-primary">view more</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12 col-md-6 ">
                            <div className="card cardone">
                                <div className="feature-box-xl mb-20"><span className="icon-cell">
                                    <svg enable-background="new 0 0 512 512" height="80" viewBox="0 0 512 512" width="80" xmlns="http://www.w3.org/2000/svg"><g fill="#020288"><path d="m311.734 208.706h-25.074v-25.083c0-5.522-4.478-10-10-10h-41.32c-5.523 0-10 4.478-10 10v25.083h-25.074c-5.523 0-10 4.478-10 10v41.33c0 5.522 4.477 10 10 10h25.074v25.082c0 5.522 4.477 10 10 10h41.32c5.522 0 10-4.478 10-10v-25.082h25.074c5.522 0 10-4.478 10-10v-41.33c0-5.522-4.477-10-10-10zm-10 41.33h-25.074c-5.522 0-10 4.478-10 10v25.082h-21.32v-25.082c0-5.522-4.477-10-10-10h-25.074v-21.33h25.074c5.523 0 10-4.478 10-10v-25.083h21.32v25.083c0 5.522 4.478 10 10 10h25.074z">
                                    </path>
                                        <path d="m330.566 120.217v-51.05c0-5.522-4.478-10-10-10h-14.759v-49.167c0-5.522-4.478-10-10-10h-79.616c-5.523 0-10 4.478-10 10v49.167h-14.758c-5.523 0-10 4.478-10 10v51.049c-37.43 23.089-62.429 64.475-62.429 111.589v270.195c0 5.522 4.477 10 10 10h253.992c5.522 0 10-4.478 10-10v-270.194c0-47.115-24.999-88.501-62.43-111.589zm-104.374-100.217h19.808v2.559c0 5.522 4.477 10 10 10 5.522 0 10-4.478 10-10v-2.559h19.808v39.167h-59.616zm-24.759 59.167h109.133v30.965c-15.03-6.023-31.427-9.338-48.583-9.338h-11.967c-17.156 0-33.552 3.315-48.583 9.338zm171.563 412.833h-233.992v-260.194c0-61.212 49.8-111.012 111.012-111.012h11.967c61.213 0 111.013 49.8 111.013 111.012z">
                                        </path><path d="m181.465 350.096h149.069v102.32h-149.069z" fill="#a4fcc4">
                                        </path>
                                    </g>
                                    </svg>
                                </span>
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title">Surgery</h3>
                                    <p className="card-text">Phasellus venenatis porta rhoncus. Integer et viverra felis.</p>
                                    <a href="#" className="btn btn-primary">view more</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12 col-md-6 ">
                            <div className="card cardone">
                                <div className="feature-box-xl mb-20"><span className="icon-cell">
                                    <svg enable-background="new 0 0 512 512" height="80" viewBox="0 0 512 512" width="80" xmlns="http://www.w3.org/2000/svg"><g fill="#020288"><path d="m311.734 208.706h-25.074v-25.083c0-5.522-4.478-10-10-10h-41.32c-5.523 0-10 4.478-10 10v25.083h-25.074c-5.523 0-10 4.478-10 10v41.33c0 5.522 4.477 10 10 10h25.074v25.082c0 5.522 4.477 10 10 10h41.32c5.522 0 10-4.478 10-10v-25.082h25.074c5.522 0 10-4.478 10-10v-41.33c0-5.522-4.477-10-10-10zm-10 41.33h-25.074c-5.522 0-10 4.478-10 10v25.082h-21.32v-25.082c0-5.522-4.477-10-10-10h-25.074v-21.33h25.074c5.523 0 10-4.478 10-10v-25.083h21.32v25.083c0 5.522 4.478 10 10 10h25.074z">
                                    </path>
                                        <path d="m330.566 120.217v-51.05c0-5.522-4.478-10-10-10h-14.759v-49.167c0-5.522-4.478-10-10-10h-79.616c-5.523 0-10 4.478-10 10v49.167h-14.758c-5.523 0-10 4.478-10 10v51.049c-37.43 23.089-62.429 64.475-62.429 111.589v270.195c0 5.522 4.477 10 10 10h253.992c5.522 0 10-4.478 10-10v-270.194c0-47.115-24.999-88.501-62.43-111.589zm-104.374-100.217h19.808v2.559c0 5.522 4.477 10 10 10 5.522 0 10-4.478 10-10v-2.559h19.808v39.167h-59.616zm-24.759 59.167h109.133v30.965c-15.03-6.023-31.427-9.338-48.583-9.338h-11.967c-17.156 0-33.552 3.315-48.583 9.338zm171.563 412.833h-233.992v-260.194c0-61.212 49.8-111.012 111.012-111.012h11.967c61.213 0 111.013 49.8 111.013 111.012z">
                                        </path><path d="m181.465 350.096h149.069v102.32h-149.069z" fill="#a4fcc4">
                                        </path>
                                    </g>
                                    </svg>
                                </span>
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title">Surgery</h3>
                                    <p className="card-text">Phasellus venenatis porta rhoncus. Integer et viverra felis.</p>
                                    <a href="#" className="btn btn-primary">view more</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12 col-md-6 ">
                            <div className="card cardone">
                                <div className="feature-box-xl mb-20"><span className="icon-cell">
                                    <svg enable-background="new 0 0 512 512" height="80" viewBox="0 0 512 512" width="80" xmlns="http://www.w3.org/2000/svg"><g fill="#020288"><path d="m311.734 208.706h-25.074v-25.083c0-5.522-4.478-10-10-10h-41.32c-5.523 0-10 4.478-10 10v25.083h-25.074c-5.523 0-10 4.478-10 10v41.33c0 5.522 4.477 10 10 10h25.074v25.082c0 5.522 4.477 10 10 10h41.32c5.522 0 10-4.478 10-10v-25.082h25.074c5.522 0 10-4.478 10-10v-41.33c0-5.522-4.477-10-10-10zm-10 41.33h-25.074c-5.522 0-10 4.478-10 10v25.082h-21.32v-25.082c0-5.522-4.477-10-10-10h-25.074v-21.33h25.074c5.523 0 10-4.478 10-10v-25.083h21.32v25.083c0 5.522 4.478 10 10 10h25.074z">
                                    </path>
                                        <path d="m330.566 120.217v-51.05c0-5.522-4.478-10-10-10h-14.759v-49.167c0-5.522-4.478-10-10-10h-79.616c-5.523 0-10 4.478-10 10v49.167h-14.758c-5.523 0-10 4.478-10 10v51.049c-37.43 23.089-62.429 64.475-62.429 111.589v270.195c0 5.522 4.477 10 10 10h253.992c5.522 0 10-4.478 10-10v-270.194c0-47.115-24.999-88.501-62.43-111.589zm-104.374-100.217h19.808v2.559c0 5.522 4.477 10 10 10 5.522 0 10-4.478 10-10v-2.559h19.808v39.167h-59.616zm-24.759 59.167h109.133v30.965c-15.03-6.023-31.427-9.338-48.583-9.338h-11.967c-17.156 0-33.552 3.315-48.583 9.338zm171.563 412.833h-233.992v-260.194c0-61.212 49.8-111.012 111.012-111.012h11.967c61.213 0 111.013 49.8 111.013 111.012z">
                                        </path><path d="m181.465 350.096h149.069v102.32h-149.069z" fill="#a4fcc4">
                                        </path>
                                    </g>
                                    </svg>
                                </span>
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title">Surgery</h3>
                                    <p className="card-text">Phasellus venenatis porta rhoncus. Integer et viverra felis.</p>
                                    <a href="#" className="btn btn-primary">view more</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <CardNum />
            <div className="third">
                <div className="my-5">
                    <div className="header-team text-center">
                        <h6>Our Doctor</h6>
                        <h2>Meet Best Doctors</h2>
                    </div>
                    <OurTeam />
                </div>
            </div>
            <div>
                <News />
            </div>

        </section>
    )
}
export default Service;