import React from "react";

export const TextArea = (props) =>{
    return(
        <textarea
            className={props.className}
            rows={props.rows} 
            cols={props.cols}
            id={props.id}
            onChange={props.onChange}
            placeholder={props.placeholder}
            value={props.defaultValue}
        />
    )
}
