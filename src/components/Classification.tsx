import React from "react";
import './Classification.scss';
import {Link} from "react-router-dom"
interface Props{
 id : number,
 imageurl : string,
 categoryname : string
}

const ClassificationCard : React.FC<Props> = ({imageurl,categoryname}) => {

    return (
        <>
        <div className="classification-card">
            <img className="classification-image" src={imageurl} alt="order"></img>
            <span className="classification-name">{categoryname}</span>
        </div>
        </>
    )

}

export default ClassificationCard;