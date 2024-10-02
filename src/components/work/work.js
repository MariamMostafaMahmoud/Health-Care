import React from "react";
// css
import './_work.scss';
const WorkArea = () => {
    return (
        <section className="sec my-5">
            <div className="custom-container mb-5">
                <div className="text-center text-header">
                    <h6>Working Process</h6>
                    <h2>How we works?</h2>
                </div>
                <div className="row justify-content-center work-contant">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 mb-30 work-one mt-md-5 mt-sm-5">
                        <h3>01</h3>
                        <div>
                            <h5>Make Appointmnet</h5>
                            <p>It is a long established fact that a reader will be distracted by the readable content of.</p>
                        </div>
                        <button>View More <i class="btn-icon-bx fas fa-chevron-right"></i></button>  
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 mb-30 work-two mt-md-5  mt-sm-5">
                        <h3>01</h3>
                        <div>
                            <h5>Make Appointmnet</h5>
                            <p>It is a long established fact that a reader will be distracted by the readable content of.</p>
                        </div>
                        <button>View More <i class="btn-icon-bx fas fa-chevron-right"></i></button>  
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 mb-30 work-one  mt-md-5 mt-sm-5">
                        <h3>01</h3>
                        <div>
                            <h5>Make Appointmnet</h5>
                            <p>It is a long established fact that a reader will be distracted by the readable content of.</p>
                        </div>
                        <button>View More <i class="btn-icon-bx fas fa-chevron-right"></i></button>  
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WorkArea