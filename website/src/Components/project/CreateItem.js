import React, {Component} from "react";
import {connect} from 'react-redux';
import {createProject} from "../../store/Actions/projectActions";

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
        if (this.state.project == ''){
            console.log("Please enter the project title!");
        } else if (this.state.description == ''){
            console.log("Please enter the project description!");
        } else {
            this.props.createProject(this.state, () =>{window.location="/";});
        }
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
        createProject: (project, callback) => dispatch (createProject(project, callback))
    }
}

export default connect(null, mapDispatchToProps) (CreateItem);