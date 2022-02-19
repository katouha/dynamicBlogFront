import React from "react";
import { BlogTopContainer } from "../organisms/BlogTopContainer";
import { HeaderContainer } from "../organisms/HeaderContainer";
export const BlogTopTemplate = (props) =>{
    return(
        <>
            <HeaderContainer
                displayFlg = {false}
                headText={"ゆるゆるブログ"}    
            />
            <BlogTopContainer />
        </>
    )
}