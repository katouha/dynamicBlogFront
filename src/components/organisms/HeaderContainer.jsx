import React from "react";
import './../../resources/css/header.css'
import { Button } from "../atoms/Button";
import { Link } from "../atoms/Link";
import { Label } from "../atoms/Label";
import { useNavigate } from 'react-router-dom';
import InstagramImage from '../../resources/image/instagram.png'
import { Image } from "../atoms/Image";
export const HeaderContainer = (props) =>{

    const navigate = useNavigate();
    const logout = () => {
        //ログアウト
        localStorage.clear();
        navigate("/management/login");
    }
    return(
        <div className={"headerContant"}>
            <div　className={"headerContainer"}>
                <div className={"instagramArea"}>
                    <Image 
                        src={InstagramImage}
                        className={"imageArea"}
                        width={"50px"}
                    />
                    <Link
                        href={"https://www.instagram.com/hayabusa0308"}
                        value={"instagram"}
                        target={"_blank"}
                        rel={"noopener noreferrer"}
                        className={"instagramLink"}
                    />
                </div>
                <Label 
                    className={"headerTitle"}
                    value={props.headText}
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