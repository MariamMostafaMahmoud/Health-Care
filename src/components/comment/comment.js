import React from "react";
import './_comment.scss';
import cphoto from '../../assets/download4.jpeg'

const CommentDoc = () => {
    return (
        <ol class="comment-list">
            <li class="comment">
                <div className="comment-bg">
                    <div class="comment-author ">
                        <img src={cphoto} />
                        <div class="comment-name">
                            <h4 class="fn">Michel</h4>
                            <div class="comment-meta">
                                <a href="#">May 09, 2021 at 10:45 am</a>
                            </div>
                        </div>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                    <div class="reply-btn">
                        <a href="#">Reply</a>
                    </div>
                </div>
            </li>
        </ol>
    )
}
export default CommentDoc;