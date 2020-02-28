import React from 'react'
import ProjectSummary from "./ProjectSummary";
import {Link} from "react-router-dom";

const ItemList = ({projects}) => {
    var arr = [];
    for (let projectId in projects){
        let copy = { }
        Object.assign(copy, projects[projectId])

        copy.id = projectId
        arr.push(copy)
    }

    return (
        <div className={"project-list section"}>
            {projects && arr.map(project => {
                return (
                    <Link to={'/project/' + project.id}>
                        <ProjectSummary project={project} key={project.id}/>
                    </Link>
                )
            })}
        </div>
    )
}
export default ItemList;