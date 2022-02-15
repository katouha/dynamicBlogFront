import React from "react";

export const Input = (props) =>{
    return(
     <input 
        className={props.className}
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        id={props.id}
     />
    )
}
