import React,{useState,useEffect,useLayoutEffect}  from "react";
import { HeaderContainer } from "../organisms/HeaderContainer";
import './../../resources/css/blogTop.css'
import axios from "axios";
import { KbnArea } from "../molecules/KbnArea";
import { useNavigate } from 'react-router-dom';
export const BlogTopContainer = (props) =>{

    const navigate = useNavigate();
    const [kbnList,setKbnList] = useState([]);

    //画面に入った際の初期実行メソッド
    useEffect(async() => {
        let errorFlg = false;
        await axios.get("http://localhost:8080/dynamicBlog/getBlogKbnList")
        .then(res => {
            let apiResult = res.data.result.returnCd;
            //api成功
            if(apiResult === "0"){
                let kbnList = res.data.result.kbnInfo;
                setKbnList(kbnList);
            }else{
                errorFlg=true;
            }
        })
    },[]);

    //詳細を確認を押下時の処理
    const discription = async(kbn) => {
        let errorFlg = false;
        await axios.post("http://localhost:8080/dynamicBlog/getBlogList",{kbn})
        .then(res => {
            let apiResult = res.data.result.returnCd;
            //api成功
            if(apiResult === "0"){
                let kbnList = res.data.result.blogInfo;
                var kbnJson = JSON.stringify(kbnList);
                localStorage.setItem("blogList",kbnJson);
                navigate("/blogPage/blogList");
            }else{
                errorFlg=true;
            }
        })
    }

    return(
        <div>
            <div className={"BlogTop"}/>
            <div className={"contentArea"}>
                {kbnList.map((kbnData,index)=>{
                    return(
                        <KbnArea
                            id={"kbnArea"+index}
                            key={index}
                            contentArea={index === 0 ? "kbnContentArea" : "kbnContentArea2"}
                            discriptionArea={"kbnDiscriptionArea"}
                            kbnDiscription={kbnData.kbndiscription}
                            linkArea={"kbnLinkArea"}
                            onClick={() =>discription(kbnData.blogkbn)}
                            kbn={kbnData.blogkbn}
                        />
                    )
                })}
            </div>
        </div>
    )
}