import React from "react";
import {Link} from 'react-router-dom'
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const NavigationBar = () => {
    return (
        <nav className={"nav-wrapper grey darken-3"}>
            <div className={"container"}>
                <Link to={'/'} className={"brand-logo"}> Database </Link>
                <SignedInLinks/>
                <SignedOutLinks/>
            </div>
        </nav>
    )
}
export default NavigationBar;