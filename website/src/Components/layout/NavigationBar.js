import React from "react";
import {Link} from 'react-router-dom'
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import {connect} from 'react-redux';

const NavigationBar = (props) => {
    const {auth} = props;
    console.log(auth);
    const links = auth.uid ? <SignedInLinks/> : <SignedOutLinks/>;
        return (
            <nav className={"nav-wrapper grey darken-3"}>
                <div className={"container"}>
                    <Link to={'/dashboard'} className={"brand-logo"}> Utube </Link>
                    {links}
                </div>
            </nav>
        )
};

const mapToProps = (state) => {
    console.log(state);
    return {
        auth: state.firebase.auth
    }
};
export default
    connect(mapToProps)
    (NavigationBar)
;