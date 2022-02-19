import React,{useState,useEffect,useLayoutEffect}  from "react";
import './../../resources/css/blogDetail.css'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Label } from "../atoms/Label";
import { Button } from "../atoms/Button";
export const BlogDetailContainer = (props) =>{

    const navigate = useNavigate();
    const [blogDetailList,setBlogDetailList] = useState([]);
    const [blogInfo,setBlogInfo] = useState({});

    //画面に入った際の初期実行メソッド
    useLayoutEffect(() => {
        //ローカルストレージの値をステートに格納
        var jsonBlogList = localStorage.getItem('blogDetail');
        var selectBlogList = JSON.parse(jsonBlogList);
        var obj = {
            title:selectBlogList.blogtitle,
            discription:selectBlogList.blogdiscription,
            registDate:selectBlogList.registdate,
            registUser:selectBlogList.registusername,
        }
        console.log(selectBlogList.blogDetail);
        console.log(obj);
        setBlogInfo(obj);
        setBlogDetailList(selectBlogList.blogDetail);
    },[]);

    //記事一覧に戻る
    const returnBlogList = () => {
        navigate("/blogPage/blogList");
    }
    const returnTop = () => {
        navigate("/blogPage/top");
    }

    return(
        <div>
            <div className={"BlogDetail"}/>
            <div className={"BlogDetailContent"}>
                <div className={"returnBlock"}>
                    <span onClick={()=>returnTop()} className={"returnLink"}>トップ</span>
                    <span>{">>"}</span>
                    <span onClick={()=>returnBlogList()} className={"returnLink2"}>記事一覧</span>
                    <span>{">>"}</span>
                    <span className={"returnLink3 detail"}>記事詳細</span>
                </div>
                <div className={"registerUserInfo"}>
                    <div className={"writeDateArea"}>
                        記載日：{blogInfo.registDate}
                    </div>
                    <div className={"blogRegistUserArea"}>
                        投稿者：{blogInfo.registUser}
                    </div>
                </div>
                <div className={"contentDetailArea"}>
                    <div className={"blogTitleArea"}>
                        <h1>{blogInfo.title}</h1>
                    </div>
                    <div className={"blogTitleDiscriptArea"}>
                        {blogInfo.discription}
                    </div>
                    {blogDetailList.length > 0 ? blogDetailList.map((blogData,index)=>{
                        return(
                            <div>
                                <h2>{blogData.blogsubtitle}</h2>
                                {blogData.blogbody}
                            </div>
                        )
                    }):null}
                </div>
            </div>
        </div>
    )
}