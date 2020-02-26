import React, {Component} from "react";
import {connect} from 'react-redux';
import { Redirect } from 'react-router'
import {createProject} from "../../store/Actions/projectActions";
import Dashboard from "../dashboard/Dashboard";
import {Route} from "react-router-dom";

class CreateItem extends Component {
    state = {
        project: '',
        description: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.createProject(this.state);
        Redirect(Dashboard, '/');
    }
    render() {
        return (
            <div className={"container"}>
                <form onSubmit={this.handleSubmit} className={"white"}>
                    <h5 className={"grey-text text-darken-3"}>Create Project</h5>
                    <div className={"input-field"}>
                        <label htmlFor={"project"}>Project Title</label>
                        <input type={"text"} id={"project"} onChange={this.handleChange}/>
                    </div>
                    <div className={"input-field"}>
                        <label htmlFor={"description"}>Project Description</label>
                        <input type={"text"} id={"description"} onChange={this.handleChange}/>
                    </div>
                    <div className={"input-field"}>
                        <button className={"btn pink lighten-1 z-depth0"}>Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch (createProject(project))
    }
}

export default connect(null, mapDispatchToProps) (CreateItem);