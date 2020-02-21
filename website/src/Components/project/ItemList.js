import React from 'react'
import ProjectSummary from "./ProjectSummary";

const ItemList = () => {
    return (
        <div className={"project-list section"}>

            <ProjectSummary/>
            <ProjectSummary/>
            <ProjectSummary/>
            <ProjectSummary/>

        </div>
    )
}
export default ItemList;