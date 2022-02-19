import React,{useState,useEffect}  from "react";
import './../../resources/css/blogList.css'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Label } from "../atoms/Label";
import { BlogListArea } from "../molecules/BlogListArea";
export const BlogListContainer = (props) =>{

    const navigate = useNavigate();
    const [blogList,setBlogList] = useState([]);

    //画面に入った際の初期実行メソッド
    useEffect(() => {
        //ローカルストレージの値をステートに格納
        var jsonBlogList = localStorage.getItem('blogList');
        var selectBlogList = JSON.parse(jsonBlogList);
        setBlogList(selectBlogList);
    },[]);

    //詳細を確認を押下時の処理
    const blogDetail = async(blogId) => {
        let errorFlg = false;
        await axios.post("http://localhost:8080/dynamicBlog/getBlogDetail",{blogId})
        .then(res => {
            let apiResult = res.data.result.returnCd;
            //api成功
            if(apiResult === "0"){
                let blogList = res.data.result;
                var blogJson = JSON.stringify(blogList);
                localStorage.setItem("blogDetail",blogJson);
                navigate("/blogPage/blogDetail");
            }else{
                errorFlg=true;
            }
        })
        console.log(blogId);
    }

    const returnTop = () => {
        navigate("/blogPage/top");
    }

    return(
        <div>
            <div className={"BlogTop"}/>
            <div className={"BlogListContent"}>
                <div className={"returnBlock"}>
                    <span onClick={()=>returnTop()} className={"returnLink"}>トップ</span>
                    <span>{">>"}</span>
                    <span className={"returnLink2 detail"}>記事一覧</span>
                </div>
                <div className={"blogNumArea"}>
                    <Label
                        className={"blogAll"}
                        value={"記事一覧"}
                    />
                    <Label
                        className={"blogNum"}
                        value={"全"+blogList.length+"件"}
                    />
                </div>
                {blogList.map((blogData,index)=>{
                    return(
                        <BlogListArea 
                            contentArea={"blogContentArea"}
                            key={index}
                            discriptionArea={"discriptionArea"}
                            discription={blogData.blogdiscripton}
                            blogDateArea={"dateArea"}
                            date={blogData.registdate}
                            onClick={()=>blogDetail(blogData.blogid)}
                            btnClassName={"btnStyle"}
                            btnValue={"記事を見る"}
                        />
                    )
                })}
            </div>
        </div>
    )
}