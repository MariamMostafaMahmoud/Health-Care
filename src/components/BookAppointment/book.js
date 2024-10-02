import React from "react";
import phone from '../../assets/phone.png';
import img1 from '../../assets/women.3.png';
import img2 from '../../assets/message4.png';
import img3 from '../../assets/location.png';
import img4 from '../../assets/right.png';
import img5 from '../../assets/setting.png';
import './_book.scss';
import BookForm from "./bookForm";

const Book = () => {
    return (
        <section className="sec2 ">
            <div className="bg-form">
                <div className="container bg-book">
                    <div className="row align-items-center bg-form">
                        <div class="col-xl-6 col-lg-6 col-md-6  d-flex justify-content-center">
                            <BookForm />
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 ">
                            <div className="appointment-thumb">
                                    <img src={phone} className="phone" />
                                    <div class="images-group">
                                        <img src={img1} className="img1" />
                                        <img src={img3} className="img3" />
                                        <img src={img5} className="img5" />
                                        <img src={img4} className="img4" />
                                        <img src={img2} className="img2" />
                                    </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default Book;