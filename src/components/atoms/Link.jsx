import React from "react";

export const Link = (props) =>{
    return(
     <a
        onClick={props.onClick}
        className={props.className}
        href={props.href}
        target={props.target}
        rel={props.rel}
    >
        {props.value}
    </a>
    )
}
