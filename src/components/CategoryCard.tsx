import React from "react";
import './CategoryCard.scss';
import {Link} from "react-router-dom"
interface Props{
 imageurl : string,
 categoryname : string,
 route :string
}

const CategoryCard : React.FC<Props> = ({imageurl,categoryname,route}) => {

    return (
        <>
        <Link className="category-card" to={route}>
            <img className="category-image" src={imageurl} alt="order"></img>
            <span className="category-name">{categoryname}</span>
        </Link>
        </>
    )

}

export default CategoryCard;