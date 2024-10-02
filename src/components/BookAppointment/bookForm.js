import React from "react";
import './_bookForm.scss';
const BookForm = () => {
    return (
        <div className="border-book">
            <div class="appointment-form form-wraper">
                <h3 class="title">Book Appointment</h3>
                <form action="#">
                    <div class="form-group">
                        <select class="form-select form-control">
                            <option>Selecty Department</option>
                            <option>One</option>
                            <option>Two</option>
                            <option>Three</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <select class="form-select form-control">
                            <option>Select Doctor</option>
                            <option>One</option>
                            <option>Two</option>
                            <option>Three</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Your Name" />
                    </div><div class="form-group">
                        <input type="number" class="form-control" placeholder="Phone Numbers" />
                    </div><div class="form-group">
                        <input type="date" class="form-control" />
                    </div>
                    <button type="submit" class="btn btn-secondary btn-lg">Appointment Now</button>
                </form>
            </div>
        </div>
    )
}
export default BookForm;