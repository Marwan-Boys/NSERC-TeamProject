import React, {Component} from "react";
import {connect} from 'react-redux'
import {signIn} from "../../store/Actions/CheckUsers";

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        this.props.signIn(this.state, () =>{window.location="/dashboard";});
    }
    render() {
        return (
            <div className={"container"}>
                <form onSubmit={this.handleSubmit} className={"white"}>
                    <h5 className={"grey-text text-darken-3"}>Sign In</h5>
                    <div className={"input-field"}>
                        <label htmlFor={"email"}>Email</label>
                        <input type={"email"} id={"email"} onChange={this.handleChange}/>
                    </div>
                    <div className={"input-field"}>
                        <label htmlFor={"password"}>Password</label>
                        <input type={"password"} id={"password"} onChange={this.handleChange}/>
                    </div>
                    <div className={"input-field"}>
                        <button className={"btn pink lighten-1 z-depth0"}>Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (credentials, callback) => dispatch(signIn(credentials, callback))
    }
}

export default connect(null, mapDispatchToProps)(SignIn);