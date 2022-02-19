import React from "react";

export const Image = (props) =>{
    return(
        <img src={props.src} width={props.width} className={props.className} />
    )
}

