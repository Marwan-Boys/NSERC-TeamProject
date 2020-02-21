import React from "react";
import {Link, NavLink} from 'react-router-dom'

const SignedInLinks = () => {
    return (
        <ul className={"right"}>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/'}>Profile</NavLink></li>
            <li><NavLink to={'/'}>Activity</NavLink></li>
            <li><NavLink to={'/'}>Log Out</NavLink></li>
            <li><NavLink to={'/'} className={'btn btn-floating'}>DB</NavLink></li>
        </ul>
    )
}

export default SignedInLinks