import React from "react";
import { BlogDetailContainer } from "../organisms/BlogDetailContainer";
import { HeaderContainer } from "../organisms/HeaderContainer";
export const BlogDetailTemplate = (props) =>{
    return(
        <>
            <HeaderContainer
                displayFlg = {false}
                headText={"ゆるゆるブログ"}    
            />
            <BlogDetailContainer />
        </>
    )
}