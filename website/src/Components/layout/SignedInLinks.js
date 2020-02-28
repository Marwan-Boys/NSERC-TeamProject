import React from "react";
import { NavLink} from 'react-router-dom'

const SignedInLinks = () => {
    return (
        <ul className={"right"}>
            <li><NavLink to={'/dashboard'}>Home</NavLink></li>
            <li><NavLink to={'/create'}>New Project</NavLink></li>
            <li><NavLink to={'/signin'}>Log Out</NavLink></li>
            {/*<!-- <li><NavLink to={'/'} className={'btn btn-floating'}>DB</NavLink></li> -->*/}
        </ul>
    )
}
export default SignedInLinks;