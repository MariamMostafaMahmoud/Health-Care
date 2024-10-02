import React, { Fragment } from "react";
import Navs from "./nav/nav";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./footer/Footer";
import Bannar from "./bannar/bannar.";
import { useEffect } from "react";

const Layout = () => {
    const location = useLocation();
    const bannersData = {
        "/About": "About Us",
        "/OurTeam":"Our Team",
        "/FAQ":"faq's",
        "/Booking":"Booking",
        "/Error":"Page Not Found",
        "/Services":"Services",
        "/ServicesDetails":"Services Details",
        "/Blog":"Blog Grid 3",
        "/BlogDetails":"Blog Details",
        "/Contact": "Contact Us",
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <Fragment>
            <Navs />
            {bannersData[location.pathname] && (
                <Bannar title={bannersData[location.pathname]} />
            )}
            <main><Outlet /></main>
            <Footer />
        </Fragment>
    )
}
export default Layout;