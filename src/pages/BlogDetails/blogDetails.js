import React from "react";

// images
import smphoto from '../../assets/download.jpeg';
import blogimg from '../../assets/pic1.d8.jpg';
import bphoto from '../../assets/pic2.24.jpg';
import sphoto from '../../assets/pic5.7.jpg';
import dphoto from '../../assets/pic1.jpg';
import fphoto from '../../assets/pic3.jpg';
import kphoto from '../../assets/pic2.jpg';

// scss
import './_blogDetails.scss';

import CommentDoc from "../../components/comment/comment";
const BlogDetails = () => {
    return (
        <section className="blog-sec my-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-7 col-xl-8 mb-30 mb-md-50">
                        <div className="blog-frist">
                            <img src={blogimg} className="blogimg" alt="blogimg" />
                            <div className="blog-info">
                                <ul class="post-meta d-flex flex-wrap align-items-center">
                                    <li class="author">
                                        <img src={smphoto} /> Sonar Moyna
                                    </li>
                                    <li class="date">
                                        <i class="far fa-calendar-alt"></i> 19 July 2021
                                    </li>
                                </ul>
                                <h2>Precious Tips To Help You Get Better.</h2>
                                <p className="pra-one">You just need to enter the keyword and select the keyword type to generate a list of 6 title ideas and suggestions. If you’re not satisfied with the results, you can always hit the refresh button to generate a new list of unique titles.</p>
                                <div className="quote">
                                    <p>
                                        Once you’ve gotten all the titles and have chosen the best one, the next thing you need to do is to craft a magnetic content. Great content marketers excel at creating content.
                                    </p>

                                </div>
                                <p className="pra-two">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <div className="row my-5 imgs">
                                    <div className="col-6" >
                                        <img src={sphoto} />
                                    </div>
                                    <div className="col-6">
                                        <img src={bphoto} />
                                    </div>
                                </div>
                                <p className="pra-one">You just need to enter the keyword and select the keyword type to generate a list of 6 title ideas and suggestions. If you’re not satisfied with the results, you can always hit the refresh button to generate a new list of unique titles.</p>
                                <p className="pra-one">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <div className="footer-blog">
                                    <div className="tags">
                                        <strong>Tags:</strong>
                                        <a href="#">Health</a>
                                        <a href="#">Growth</a>
                                        <a href="#">Life</a>
                                    </div>
                                    <div className="share">
                                        <ul class="social-media mt-3">
                                            <li><strong>Share:</strong></li>
                                            <li>
                                                <a rel="noreferrer" target="_blank" href="https://www.facebook.com/">
                                                    <i class="fab fa-facebook-f"></i>
                                                </a>
                                            </li>
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
                            </div>
                            <div className="blog-second">
                                <div class="author-profile-info">
                                    <div class="author-profile-pic">
                                        <img src={bphoto} />
                                    </div>
                                    <div class="author-profile-content">
                                        <h5>Sonar Z. Moyna</h5>
                                        <p class="mb-20">Aenean sollicitudin, lorem quis biber idum auctor anisi elit consequat happ quam vel enim augue.</p>
                                        <ul class="social-media mt-3">
                                            <li>
                                                <a rel="noreferrer" target="_blank" href="https://www.facebook.com/">
                                                    <i class="fab fa-facebook-f"></i>
                                                </a>
                                            </li>
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
                            </div>
                            <div className="blogThird">
                                <div class="comments-area">
                                    <h4 class="widget-title">8 Comments</h4>
                                    <div class="comment-doc">
                                        <CommentDoc />
                                        <CommentDoc />
                                        <CommentDoc />
                                        <CommentDoc />

                                        <div class="comment-respond ">
                                            <h4 class="widget-title">Leave a Reply</h4>
                                            <form class="comment-form" id="commentform">
                                                <div class="row">
                                                    <div class="col">
                                                        <input type="text" class="form-control" placeholder="Author" aria-label="First name" />
                                                    </div>
                                                    <div class="col">
                                                        <input type="text" class="form-control" placeholder="Email" aria-label="Last name" />
                                                    </div>
                                                </div>
                                                <div class="mb-3">
                                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Comment"></textarea>
                                                </div>
                                                <input type="submit" class="submit" id="submit" name="submit" />
                                            </form>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-5 col-xl-4 mb-30 z-1">
                        <aside class="sticky-top pb-1">
                            <div class="side-bar">
                                <div class=" widget_search">
                                    <form class="searchform">
                                        <div class="input-group">
                                            <input name="text" class="form-control" placeholder="Enter your keywords..." type="text" />
                                            <div class="input-group-btn">
                                                <button type="submit" class="btn ">
                                                    <i class="fa fa-search"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div class="recent-posts my-5" >
                                    <h4 class="widget-title">Recent Posts</h4>
                                    <div class="widget-post-bx ">
                                        <div class="widget-post d-flex align-items-center">
                                            <div class="post-media">
                                                <img src={dphoto} alt="" />
                                            </div>
                                            <div class="post-info">
                                                <div class="post-header">
                                                    <h6 class="post-title">
                                                        Precious Tips To Help You Get Better.
                                                    </h6>
                                                </div>
                                                <ul class="post-meta">
                                                    <li class="date"><i class="far fa-calendar-alt"></i> 21 July 2021
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="widget-post d-flex align-items-center">
                                            <div class="post-media">
                                                <img src={fphoto} alt="" />
                                            </div>
                                            <div class="post-info">
                                                <div class="post-header">
                                                    <h6 class="post-title">
                                                        Ten Doubts You Should Clarify About.
                                                    </h6>
                                                </div>
                                                <ul class="post-meta">
                                                    <li class="date">
                                                        <i class="far fa-calendar-alt"></i> 20 July 2021</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="widget-post d-flex align-items-center">
                                            <div class="post-media">
                                                <img src={fphoto} alt="" />
                                            </div>
                                            <div class="post-info">
                                                <div class="post-header">
                                                    <h6 class="post-title">
                                                        The 10 Steps Needed For Putting.
                                                    </h6>
                                                </div>
                                                <ul class="post-meta">
                                                    <li class="date">
                                                        <i class="far fa-calendar-alt"></i> 19 July 2021
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="widget_gallery">
                                    <h4 class="widget-title">Our Gallery</h4>
                                    <ul class="magnific-image d-flex flex-wrap">
                                        <li >
                                            <img src={smphoto} alt="" />
                                        </li>
                                        <li>
                                            <img src={smphoto} alt="" />
                                        </li>
                                        <li>
                                            <img src={smphoto} alt="" />
                                        </li>
                                        <li>
                                            <img src={smphoto} alt="" />
                                        </li>
                                        <li>
                                            <img src={smphoto} alt="" />
                                        </li>
                                        <li>
                                            <img src={smphoto} alt="" />
                                        </li>
                                    </ul>
                                </div>
                                <div class="widget_tag my-5">
                                    <h4 class="widget-title">Tags</h4>
                                    <div class="tagcloud">
                                        <a href="#">Improvement</a>
                                        <a href="#">Health</a>
                                        <a href="#">Life</a>
                                        <a href="#">Covid</a>
                                        <a href="#">Healthy</a>
                                        <a href="#">Growth</a>
                                        <a href="#">Education</a>
                                        <a href="#">Manage</a>
                                        <a href="#">General</a>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default BlogDetails;