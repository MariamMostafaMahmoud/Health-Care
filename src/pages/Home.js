import React from "react";
// images
import headerimage from '../assets/doctor.png'
import square from '../assets/sqaur.png'
import plus from '../assets/plus.png'
// file css
import './_home.scss'
// components
import Footer from "../components/footer/Footer";
import About from "../components/About/About";
import bottomImg from '../assets/shape1.png'
import Book from "../components/BookAppointment/book";
import WorkArea from "../components/work/work";
import MySlider from "../components/slide/slide";
import News from "../components/news/news";
const Home = () => {
    return (
        <section className="bg-tran">
            <header >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 col-md-6 col-sm-7 textHeader">
                            <h6>We Provide All Health Care Solution</h6>
                            <h2>Protect Your Health And Take Care To Of Your Health</h2>
                            <button className="btn btn-lg"><a href="#"></a>Read More</button>
                        </div>
                        <div className="col-lg-5 col-md-6 col-sm-5 headerImgs">
                            <img src={headerimage} />
                            <img src={square} />
                            <img src={plus} />
                        </div>
                    </div>
                </div>
                <img src={bottomImg} className="photo" />
            </header>
            <div className="my-5">
                <About />
            </div>
           
            <WorkArea/>
            <Book />
            <MySlider/>
            <News/>
        </section>
    )
}
export default Home;