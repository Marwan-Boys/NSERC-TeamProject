import React from "react";
import {Link, NavLink} from 'react-router-dom'

const SignedOutLinks = () => {
    return (
        <ul className={"right"}>
            <li><NavLink to={'/'}>SignIn</NavLink></li>
            <li><NavLink to={'/'}>SignUp</NavLink></li>
        </ul>
    )
}

export default SignedOutLinks