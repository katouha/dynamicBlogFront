import React from "react";
import { BlogListContainer } from "../organisms/BlogListContainer";
import { HeaderContainer } from "../organisms/HeaderContainer";
export const BlogListTemplate = (props) =>{
    return(
        <>
            <HeaderContainer
                displayFlg = {false}
                headText={"ゆるゆるブログ"}    
            />
            <BlogListContainer />
        </>
    )
}