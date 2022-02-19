import React from "react";
import AlcoholImage from '../../resources/image/whisky.jpg'
import AnimeImage from '../../resources/image/amine.JPG'
import { Image } from "../atoms/Image";
export const KbnArea = (props) =>{
    return(
        <div className={props.contentArea} key={props.key} id={props.id}>
            <div>
                <Image 
                    src={props.kbn === "1" ? AlcoholImage : props.kbn === "2" ? AnimeImage : null}
                    className={"imageArea"}
                    width={"200px"}
                />
            </div>
            <div className={props.discriptionArea}>
                {props.kbnDiscription.split('br').map(
                    (t) => <div>{t}<br /></div>)
                }    
            </div>
            <div onClick={props.onClick} className={props.linkArea}>
                » 詳細を確認する
            </div>
        </div>
    )
}
