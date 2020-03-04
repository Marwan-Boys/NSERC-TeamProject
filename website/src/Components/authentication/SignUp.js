
import React, {Component} from "react";
import {connect} from 'react-redux'
import {signUp} from "../../store/Actions/CheckUsers";
import {Redirect} from "react-router-dom";

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    };
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.signUp(this.state);
    };
    render() {
        const {auth} = this.props;
        if (auth.uid) return <Redirect to={'/dashboard'}/>;
        return (
            <div className={"container"}>
                <form onSubmit={this.handleSubmit} className={"white"}>
                    <h5 className={"grey-text text-darken-3"}>Sign Up</h5>
                    <div className={"input-field"}>
                        <label htmlFor={"email"}>Email</label>
                        <input type={"email"} id={"email"} onChange={this.handleChange} required/>
                    </div>
                    <div className={"input-field"}>
                        <label htmlFor={"password"}>Password</label>
                        <input type={"password"} id={"password"} onChange={this.handleChange} required/>
                    </div>
                    <div className={"input-field"}>
                        <label htmlFor={"firstName"}>Display Name</label>
                        <input type={"text"} id={"firstName"} onChange={this.handleChange} required/>
                    </div>
                    <div className={"input-field"}>
                        <label htmlFor={"lastName"}>Phone</label>
                        <input type={"text"} id={"lastName"} onChange={this.handleChange} required/>
                    </div>
                    <div className={"input-field"}>
                        <button className={"btn pink lighten-1 z-depth0"}>Create Account</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (credentials) => dispatch (signUp(credentials))
    }
};
export default connect(mapStateToProps, mapDispatchToProps) (SignUp);

