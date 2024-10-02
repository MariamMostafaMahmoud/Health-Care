import React from "react";
// Components
import About from "../../components/About/About";
import CardNum from "../../components/cardnum/card";
import Member from "../../components/member/member";
import News from "../../components/news/news";

// imgs
import phot1 from '../../assets/member2.jpg';
import phot2 from '../../assets/member1.jpg';
import phot3 from '../../assets/member3.jpg';


const AboutUS = () => {
    return (
        <section className="my-5">
            <div>
                <div className="my-5">
                    <About />
                </div>
                <div className="my-5">
                    <CardNum />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-12 col-md-6">
                            <Member member={phot1} />
                        </div>
                        <div className="col-lg-4 col-12 col-md-6">
                            <Member member={phot2} />

                        </div>
                        <div className="col-lg-4 col-12 col-md-6">
                            <Member member={phot3} />
                        </div>
                    </div>
                </div>
                <div>
                    <News/>
                </div>
            </div>
        </section>
    )
}
export default AboutUS;