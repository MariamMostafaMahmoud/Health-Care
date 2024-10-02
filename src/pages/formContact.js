import React from "react";
const FormContact = () => {
    return (
        <form>
            <div className="form-group col-md-12">
                <input placeholder="Your name" className="form-control" />
            </div>
            <div className="form-group col-md-12">
                <input type="email" placeholder="Email" className="form-control" />
            </div>
            <div className="form-group col-md-12">
                <input placeholder="Phone Numbers" className="form-control" />
            </div>
            <div className="form-group col-md-12">
                <textarea placeholder="Type Message" className="form-control" />
            </div>
            <div className="form-group col-md-12">
                <select className="form-select form-control">
                    <option>Selecty Department</option>
                    <option>One</option>
                    <option>Two</option>
                    <option>Three</option>
                </select>
            </div>
            <div className="form-group col-lg-12">
                <button type="submit" className="form-control">Submit</button>
            </div>
        </form>
    )
}

export default FormContact;