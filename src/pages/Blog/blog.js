import React from "react";
import './_blog.scss';

// images
import onephoto from '../../assets/pic1.jpg';
import twophoto from '../../assets/pic2.jpg';
import threephoto from '../../assets/pic3.jpg';
import fourphoto from '../../assets/download 3.jpeg';
import fivephoto from '../../assets/download.jpeg';
import sixphoto from '../../assets/download4.jpeg';

import CardNews from "../../components/CardNew/cardNews";
const Blog = () => {
    return (
        <section className="my-5">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-md-6 my-4">
                        <CardNews photo={onephoto} img={fivephoto} />
                    </div>
                    <div className="col-xl-4 col-md-6 my-4">
                        <CardNews photo={twophoto} img={fourphoto} />
                    </div>
                    <div className="col-xl-4 col-md-6 my-4">
                        <CardNews photo={threephoto} img={sixphoto} />
                    </div>
                    <div className="col-xl-4 col-md-6 my-4">
                        <CardNews photo={twophoto} img={fourphoto} />
                    </div>
                    <div className="col-xl-4 col-md-6 my-4">
                        <CardNews photo={onephoto} img={fivephoto} />
                    </div>
                    <div className="col-xl-4 col-md-6 my-4">
                        <CardNews photo={twophoto} img={fourphoto} />
                    </div>

                </div>
                <nav aria-label="...">
                    <ul class="pagination  justify-content-center">
                        <li class="page-item">
                            <a class="page-link">Previous</a>
                        </li>
                        <li class="page-item active"><a class="page-link" href="#">1</a></li>
                        <li class="page-item" aria-current="page">
                            <a class="page-link" href="#">2</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    )
}

export default Blog;