import React from "react";
import { Label } from "../atoms/Label";
import { Input } from "../atoms/Input";
import {TextArea} from "../atoms/TextArea"
export const TextAreaForm = (props) =>{
    return(
        <div className={props.formAreaClass}>
            <Label
                value={props.labelValue}
                className={props.labelClassName}
                id={props.labelId}
            />
            <TextArea
                className={props.TextAreaClassName}
                defaultValue={props.textAreaValue}
                id={props.textAreaId}
                cols={props.textAreaCols}
                rows={props.textAreaRows}
                onChange={props.onChange}
                placeholder={props.placeholder}
            />
        </div>
    )
}
