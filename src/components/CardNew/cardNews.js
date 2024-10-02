import React from "react";
import './_cardNew.scss';
import threephoto from '../../assets/pic3.jpg';
import fivephoto from '../../assets/download.jpeg';
import fourphoto from '../../assets/download 3.jpeg';

const CardNews=(props)=>{
    return(
   
            <div className="card">
                <img src={props.photo} className="card-img-top" alt="..." />
                <div className="card-body">
                    <div className="row cardfirst">
                        <div className="col smallimg">
                            <a href="/react/blog-details">
                                <img src={props.img} alt="" />John deo
                            </a>
                        </div>
                        <div className="col iconCard"><i class="far fa-calendar-alt"></i>20 July 2021</div>
                    </div>
                    <h5 class="post-title">
                        <a href="/react/blog-details">In this hospital there are special surgeon</a>
                    </h5>

                    <a class="btn btn-outline-primary btn-sm" href="/react/blog-details">Read More
                        <i class="btn-icon-bx fas fa-chevron-right"></i>
                    </a>
                </div>
       
      </div>
    )
}
export default CardNews;