import React from "react";
import {Link} from 'react-router-dom'
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const NavigationBar = (props) => {
    if (props.isLoggedIn){
        return (
            <nav className={"nav-wrapper grey darken-3"}>
                <div className={"container"}>
                    {/*<Link to={'/'} className={"brand-logo"}> Utube </Link>*/}
                    <SignedInLinks/>
                </div>
            </nav>
        )
    } else {
        return (
        <nav className={"nav-wrapper grey darken-3"}>
            <div className={"container"}>
                {/*<Link to={'/'} className={"brand-logo"}> Utube </Link>*/}
                <SignedOutLinks/>
            </div>
        </nav>
        )

    }


}
export default NavigationBar;