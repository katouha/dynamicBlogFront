import React,{useState} from "react";
import { Button } from "../atoms/Button";
import { InputForm } from "../molecules/InputForm";
import './../../resources/css/login.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
export const LoginContainer = (props) =>{

    const [id,setId] = useState("");
    const [password,setPassword] = useState("");
    const [errorMessage,setErrorMessage] = useState([]);
    const navigate = useNavigate();

    const handleChange = (e) => {
        switch(e.target.id){
            case 'loginInputId':
                setId(e.target.value);
                break;
            case 'loginInputPassword':
                setPassword(e.target.value);
                break;
        }
    }

    const login = async() => {
        //バリデーションチェック
        let validationCheckFlg = validation();
        if(!validationCheckFlg){
            //loginAPIを呼ぶ
            await axios.post("http://localhost:8080/dynamicBlog/login",{loginId:id,password:password})
            .then(res => {
                let apiResult = res.data.result.returnCd;
                //api成功
                if(apiResult === "0"){
                    let userInfo = res.data.result.userInfo.userName;
                    localStorage.setItem("loginUser",userInfo);
                    navigate("/management/createBlog");
                    
                }else{
                    let messageList = [];
                    messageList.push(res.data.result.errorMessage);
                    setErrorMessage(messageList);
                }
            })
        }
    }

    const validation = () => {
        let validationFlg = false;
        const messageList = [];
        if(!id){
            messageList.push("ユーザーIDを入力してください");
            validationFlg = true;
        }
        if(!password){
            messageList.push("パスワードを入力してください");
            validationFlg = true;
        }

        if(validationFlg){
            //バリデーションメッセージにエラーメッセージセット
            setErrorMessage(messageList);
        }
        else{
            //バリデーションメッセージを初期化
            setErrorMessage([]);
        }

        return validationFlg;
    }

    return(
        <div className={"loginContent"}>
            <div>
                <div className={"loginTitle"}>ユーザ認証</div>
                <div className={"loginContainer"}>
                    <div className={"errorMessageArea"}>
                        {errorMessage.length > 0 ? 
                            errorMessage.map((message)=>{
                                return(
                                    <div className={"errorMessage"}>{message}</div>
                                );
                            })
                            :
                            null
                        }
                    </div>
                    <div className={"formContent"}>
                        <InputForm
                            formAreaClass={"LoginFormArea"}
                            labelValue={"ユーザーID"}
                            labelId={"loginLabelId"}
                            labelClassName={"loginLabel"}
                            inputId={"loginInputId"}
                            inputValue={id}
                            inputClassName={"loginInput"}
                            placeholder={"IDを入力"}
                            type={"text"}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={"formContent"}>
                    <InputForm
                        formAreaClass={"LoginFormArea"}
                        labelValue={"パスワード"}
                        labelId={"loginLabelPassword"}
                        labelClassName={"loginLabel"}
                        inputId={"loginInputPassword"}
                        inputValue={password}
                        inputClassName={"loginInput"}
                        placeholder={"パスワードを入力"}
                        type={"password"}
                        onChange={handleChange}
                    />
                    </div>
                    <div>
                        <Button
                            value={"ログイン"}
                            className={"loginBtn"}
                            onClick={login}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
