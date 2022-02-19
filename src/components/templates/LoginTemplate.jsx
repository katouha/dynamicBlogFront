import React from "react";
import { HeaderContainer } from "../organisms/HeaderContainer";
import { LoginContainer } from "../organisms/LoginContainer";
export const LoginTemplate = (props) =>{
    return(
        <>
            <HeaderContainer 
                displayFlg = {false} 
                headText = {"ブログ設定管理画面"}    
            />
            <LoginContainer />
        </>
    )
}