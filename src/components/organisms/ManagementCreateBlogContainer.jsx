import React,{useState,useEffect,useLayoutEffect} from "react";
import './../../resources/css/header.css'
import { Button } from "../atoms/Button";
import './../../resources/css/management_create_blog.css'
import { InputForm } from "../molecules/InputForm";
import {TextAreaForm} from "../molecules/TextAreaForm"
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { SelectBoxForm } from "../molecules/SelectBoxForm";
export const ManagementCreateBlogContainer = (props) =>{

    const navigate = useNavigate();
    const [title,setTitle] = useState("");
    const [subTitle,setSubTitle] = useState("");
    const [body,setBody] = useState("");
    const [discription,setDiscription] = useState("");
    const [addList,setAddList] = useState([]);
    const [errorMessage,setErrorMessage] = useState("");
    const [preErrorMessage,setPreErrorMessage] = useState("");
    const [user,setUser] = useState("");
    const [kbnList,setKbnList] = useState([]);
    const [kbnVal,setKbnVal] = useState("");
    useLayoutEffect(() => {
        axios.get("http://localhost:8080/dynamicBlog/getBlogKbnList")
        .then(res => {
            let apiResult = res.data.result.returnCd;
            //api成功
            if(apiResult === "0"){
                let kbnList = res.data.result.kbnInfo;
                setKbnList(kbnList);
            }
        })
        
    },[]);
    useEffect(() => {
        let user = localStorage.getItem("loginUser");
        if(user !== null && user !== undefined){
            setUser(user);
        }else{
            localStorage.clear();
            navigate("/management/login");
        }
    },[]);
    //フォーム入力値をステートに格納
    const handleChange = (e) => {
        switch(e.target.id){
            case 'titleInput':
                setTitle(e.target.value);
                break;
            case 'subTitleInput':
                setSubTitle(e.target.value);
                break;
            case 'bodyTextArea':
                setBody(e.target.value);
                break;
            case 'blogSelect':
                setKbnVal(e.target.value);
                break;
            case 'discriptionForm':
                setDiscription(e.target.value);
                break;    
        }
    }

    //入力した項目を配列に格納
    const textAdd = () => {
        setErrorMessage("");
        if(!subTitle){
            setErrorMessage("サブタイトルを入力してください");
            return;
        }
        if(!body){
            setErrorMessage("本文を入力してください");
            return;
        }
        const fileInput = document.getElementById('imageInput').files;
        let obj = {
            subTitle:subTitle,
            body:body,
            image:!fileInput[0] ? null : fileInput[0],
            imageName:fileInput.length < 1 ? null : fileInput[0].name
        }
        let list = [];
        if(addList.length !== 0){
            list = addList.concat();
        }
        list.push(obj);
        setAddList(list);
    }

    //追加した項目の削除
    const addListDelete = (index) => {
        let list = [];
        list = addList.concat();
        list.splice(index,1);
        setAddList(list);
    }

    //プレビュー
    const preview = () => {
        setPreErrorMessage("");
        if(!title){
            setPreErrorMessage("タイトルを入力してください");
            return;
        }
    }

    //登録
    const regist = async() => {
        setPreErrorMessage("");
        if(addList.length === 0){
            setPreErrorMessage("記事情報が追加されていません");
            return;
        }
        let seq = null;
        let errorFlg = false;
        for(let i = 0; i < addList.length; i++){
            let obj = {
                subTitle:addList[i].subTitle,
                body:addList[i].body,
                imageName:addList[i].imageName,
            }
            const jsonData = {
                blogList:obj,
                title:title,
                blogdiscription:discription,
                userName:user,
                blogKbn:kbnVal,
                apiFlg:seq === null ? true : false,
                blogSeq:seq,
            }

            const data = new FormData()
            data.append("file",addList[i].image);
            data.append('jsonData', new Blob([JSON.stringify(jsonData)],{type : 'application/json'}));
            const header = { headers: {
                'content-type': 'multipart/form-data',
                }}
            await axios.post("http://localhost:8080/dynamicBlog/createBlog",data,header)
            .then(res => {
                let apiResult = res.data.result.returnCd;
                //api成功
                if(apiResult === "0"){
                    if(seq == null){
                        seq = res.data.result.blogSeq;
                    }
                }else{
                    errorFlg=true;
                }
            })
        }
        if(errorFlg){
            setPreErrorMessage("登録失敗しました");
        }else{
            setPreErrorMessage("登録完了しました");
            cleanPram();
        }
    }

    function cleanPram(){
        setTitle("");
        setSubTitle("");
        setAddList([]);
        setBody("");
        setDiscription("");
        let image = document.getElementById('imageInput');
        image.value = '';
    }
    

    return(
        <>
            <div className="headerBlank"/>
            <div className={"formArea"}>
                <div>
                    <div className={"updateUser"}>更新者：{user}</div>
                    <SelectBoxForm
                        formAreaClass={"titleFormArea baseFormArea"}
                        labelValue={"ブログ区分"}
                        labelClassName={"formLabel baseFormLabel"}
                        labelId={"titleLabel"}
                        selectId={"blogSelect"}
                        kbnList={kbnList}
                        selectClassName={"selectBox"}
                        onChange={handleChange}

                    />
                    <InputForm
                        formAreaClass={"titleFormArea baseFormArea"}
                        labelValue={"タイトル"}
                        labelClassName={"formLabel baseFormLabel"}
                        labelId={"titleLabel"}
                        inputValue={title}
                        inputClassName={"inputForm baseFormInput"}
                        placeholder={"タイトルを入力してください"}
                        type={"input"}
                        inputId={"titleInput"}
                        onChange={handleChange}
                    />
                    <TextAreaForm
                        formAreaClass={"subTitleFormArea baseFormArea"}
                        labelValue={"ブログ説明文"}
                        labelClassName={"formLabel baseFormLabel"}
                        labelId={"discription"}
                        textAreaValue={discription}
                        TextAreaClassName={"discriptionAreaForm baseFormInput"}
                        placeholder={"本文を入力してください"}
                        textAreaId={"discriptionForm"}
                        onChange={handleChange}
                    />
                    <div className={"subFormArea"}>
                        {addList.length > 0 ?
                            addList.map((number,index) => {
                                return(
                                    <div key={index}>
                                        <span className={"addNum"}>追加件数：{index+1}件目</span>
                                        <span
                                            onClick={() => addListDelete(index)}
                                            className={"delLink"}
                                        >
                                            削除
                                        </span>
                                    </div>
                                )
                            })
                            :null
                        }
                        {addList.length > 0 ? <div className={"bottom"} /> : null}
                        {errorMessage !== "" ?
                            <div className={"bottom error"}>{errorMessage}</div>
                            : null
                        }
                        <InputForm
                            formAreaClass={"subTitleFormArea baseFormArea"}
                            labelValue={"サブタイトル"}
                            labelClassName={"formLabel baseFormLabel"}
                            labelId={"subTitleLabel"}
                            inputValue={subTitle}
                            inputClassName={"inputForm baseFormInput"}
                            placeholder={"サブタイトルを入力してください"}
                            type={"input"}
                            inputId={"subTitleInput"}
                            onChange={handleChange}
                        />
                        <TextAreaForm
                            formAreaClass={"subTitleFormArea baseFormArea"}
                            labelValue={"本文"}
                            labelClassName={"formLabel baseFormLabel"}
                            labelId={"bodyLabel"}
                            textAreaValue={body}
                            TextAreaClassName={"textAreaForm baseFormInput"}
                            placeholder={"本文を入力してください"}
                            textAreaId={"bodyTextArea"}
                            onChange={handleChange}
                        />
                        <InputForm
                            formAreaClass={"subTitleFormArea baseFormArea"}
                            labelValue={"画像"}
                            labelClassName={"formLabel baseFormLabel"}
                            labelId={"subTitleLabel"}
                            inputClassName={"inputForm baseFormInput"}
                            type={"file"}
                            inputId={"imageInput"}
                            onChange={handleChange}
                        />
                        <div className={"buttonArea"}>
                            <Button
                                onClick={textAdd}
                                className={"blackButtonStyle"}
                                value={"追加する"}
                            />
                        </div>
                    </div>
                    <div className={"buttonArea"}>
                        <Button
                            onClick={preview}
                            className={"blueButtonStyle marginRight"}
                            value={"プレビュー"}
                        />
                        <Button
                            onClick={regist}
                            className={"blackButtonStyle registButton marginLeft"}
                            value={"登録"}
                        />
                    </div>
                    {preErrorMessage !== "" ?
                        <div className={"top error"}>{preErrorMessage}</div>
                        : null
                    }
                </div>
            </div>
        </>
    )
}