import React from "react";
import { HeaderContainer } from "../organisms/HeaderContainer";
import { ManagementCreateBlogContainer } from "../organisms/ManagementCreateBlogContainer";
export const ManagementCreateBlogTemplate = (props) =>{
    return(
        <>
            <HeaderContainer 
                displayFlg = {true} 
                headText = {"ブログ設定管理画面"}
            />
            <ManagementCreateBlogContainer />
            
        </>
    )
}