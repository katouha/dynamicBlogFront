import React from "react";

export const SelectBox = (props) =>{
    return(
        <select name="example" className={props.className} id={props.id} onChange={props.onChange}>
            {
            props.kbnList.map((data,index) => {
                return(
                <option value={data.blogKbn}>{data.kbnName}</option>
                )
            })}
        </select>
    )
}
