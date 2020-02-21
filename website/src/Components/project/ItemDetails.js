import React from "react";

const ItemDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className={"container section project-details"}>
            <div className={"card z-depth-0"}>
                <div className={"card-content"}>
                    <span className={"card-title"}>Item Title - {id}</span>
                    <p>A description of the item or additional pictures, etc. that we cant to show for the item.</p>
                </div>
                <div className={"card-action gret lightin-4 grey-text"}>
                    <div>Posted by Nish</div>
                    <div>21 Feb, 2020</div>
                </div>
            </div>
        </div>
    )
}
export default ItemDetails;