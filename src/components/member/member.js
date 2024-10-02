import React from "react";
import './_member.scss';

const Member=(props)=>{
    return(
        <section>
            <div className="card" >
                <div className="img-card">
                    <img src={props.member} className="card-img-top" alt="" />
                </div>
                <div className="card-body">
                    <div className="data-info">
                        <h4 className="card-title">Dr. Addition Smith</h4>
                        <span>Dentist</span>
                    </div>
                    <ul class="social-media mt-3">
                        <li>
                            <a rel="noreferrer" target="_blank" href="https://twitter.com/">
                                <i class="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/">
                                <i class="fab fa-linkedin"></i>
                            </a>
                        </li>
                        <li>
                            <a rel="noreferrer" target="_blank" href="https://www.instagram.com/">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </li>
                    </ul>

                </div>
            </div>
        </section>
    )
}

export default Member;