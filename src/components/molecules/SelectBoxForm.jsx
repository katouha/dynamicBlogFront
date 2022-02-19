import React from "react";
import { Label } from "../atoms/Label";
import { SelectBox } from "../atoms/SelectBox";
export const SelectBoxForm = (props) =>{
    return(
        <div className={props.formAreaClass}>
            <Label
                value={props.labelValue}
                className={props.labelClassName}
                id={props.labelId}
            />
            <SelectBox
                kbnList={props.kbnList}
                className={props.selectClassName}
                id={props.selectId}
                onChange={props.onChange}
            />
        </div>
    )
}
