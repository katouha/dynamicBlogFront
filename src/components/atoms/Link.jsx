import React from "react";

export const Link = (props) =>{
    return(
     <a
        onClick={props.onClick}
        className={props.className}
        href={props.href}
    >
        {props.value}
    </a>
    )
}
