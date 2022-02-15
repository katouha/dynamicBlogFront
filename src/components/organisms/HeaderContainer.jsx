import React from "react";
import './../../resources/css/header.css'
import { Button } from "../atoms/Button";
import { Label } from "../atoms/Label";
import { useNavigate } from 'react-router-dom';
export const HeaderContainer = (props) =>{

    const navigate = useNavigate();
    const logout = () => {
        //ログアウト
        localStorage.clear();
        navigate("/");
    }
    return(
        <div className={"headerContant"}>
            <div　className={"headerContainer"}>
                <Label 
                    className={"headerTitle"}
                    value={"ブログ設定管理画面"}
                />
                {props.displayFlg ?
                <Button 
                    value={"ログアウト"}
                    className={"logoutBtn"}
                    onClick={logout}
                />
                : null}
                    
            </div>
        </div>
    )
}