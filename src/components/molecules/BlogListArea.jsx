import React from "react";
import {Button} from './../atoms/Button'
export const BlogListArea = (props) =>{
    return(
        <div className={props.contentArea} key={props.key} id={props.id}>
            <div className={props.discriptionArea}>
                {props.discription.split('br').map(
                    (t) => <div>{t}<br /></div>)
                }    
            </div>
            <div className={props.blogDateArea}>
                {props.date}
            </div>
            <Button 
                onClick={props.onClick}
                className={props.btnClassName}
                value={props.btnValue}
            />
        </div>
    )
}
