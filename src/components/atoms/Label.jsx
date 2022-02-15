import React from "react";

export const Label = (props) =>{
    return(
        <span className={props.className} id={props.id}>
            {props.value}
        </span>
    )
}
