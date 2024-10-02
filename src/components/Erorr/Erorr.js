import React from "react";
// scss
import './_Erorr.scss';
const Error = () => {
    return (
        <section className="error-sec text-center">
            <div class="container">
                <div class="error-content">
                    <h2 >4<span></span>4</h2>
                    <h3>The Page you were looking for couldn't be found.</h3>
                    <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                    <div className="btnss">
                        <a class="btn btn-primary me-2" href="/react/">Back</a>
                        <a class="btn btn-primary" href="/react/">Back To Home</a>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default Error;