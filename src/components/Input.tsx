import React from "react";
import {StyledInput} from "../styled";

export const Input : React.FC <{error:string}> = ( {error ,...props})=>{
    return (
        <StyledInput  {...props} />
    )
}