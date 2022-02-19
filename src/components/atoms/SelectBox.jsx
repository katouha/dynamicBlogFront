import React from "react";

export const SelectBox = (props) =>{
    return(
        <select name="example" className={props.className} id={props.id} onChange={props.onChange}>
            {
            props.kbnList.map((data,index) => {
                return(
                <option value={data.blogkbn}>{data.kbnname}</option>
                )
            })}
        </select>
    )
}
