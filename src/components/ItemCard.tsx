import { url } from "inspector";
import React from "react";
import { Link } from "react-router-dom";
import './ItemCard.scss';
interface Props
{
    key: number,
    name : string,
    price: number,
    itemimage : string
}

const ItemCard : React.FC<Props> = ({key,name , price,itemimage}) => {
    var divstyle = {
        backgroundImage : 'url(' + itemimage + ')'
    }
    return (
       <>
       <div className="itemcard">
        <Link className="itemlink" to="/menu/menuitems/item" state= {{key:key,name : name,price : price , itemimage : itemimage}}>
            <div className="cardimage" style={divstyle} >
            </div>
            <div className="itemfooter">
                <span>{name}</span>
                <small>₱ {price}</small>
            </div>
            </Link>
       </div>
       </>
    )
}

export default ItemCard;