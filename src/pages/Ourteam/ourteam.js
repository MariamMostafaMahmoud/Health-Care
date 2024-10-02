import React from "react";

import phot1 from '../../assets/member2.jpg';
import phot2 from '../../assets/member1.jpg';
import phot3 from '../../assets/member3.jpg';
import Member from "../../components/member/member";

const OurTeam = () => {
    return (
        <section className="section-people">
            <div className="container my-5">
                <div className="row row-cols-3 all-cards">
                    <div className="col-lg-4 col-12 col-md-6">
                        <Member member={phot1} />
                    </div>
                    <div className="col-lg-4 col-12 col-md-6">
                        <Member member={phot2} />

                    </div>
                    <div className="col-lg-4 col-12 col-md-6">
                        <Member member={phot3} />

                    </div>
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
        </section>
    )
}
export default OurTeam; 