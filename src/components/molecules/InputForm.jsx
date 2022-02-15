import React from "react";
import { Label } from "../atoms/Label";
import { Input } from "../atoms/Input";
export const InputForm = (props) =>{
    return(
        <div className={props.formAreaClass}>
            <Label
                value={props.labelValue}
                className={props.labelClassName}
                id={props.labelId}
            />
            <Input
                value={props.inputValue}
                className={props.inputClassName}
                placeholder={props.placeholder}
                type={props.type}
                id={props.inputId}
                onChange={props.onChange}
            />
        </div>
    )
}
