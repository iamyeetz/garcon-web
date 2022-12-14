import React from "react";
import { useLocation } from "react-router-dom";
import MenuData from "../data/menu.json"
import ItemCard from "../components/ItemCard"
import {Row,Col} from 'react-bootstrap';
const MenuItems = () => {
    const { state } = useLocation();
    return (
            //render items based on classification selected
    <>
        <Row>  
        {        
            MenuData.filter(menu => menu.classification == state.classification).map(filteredMenu => {
            
                return  (
                 <Col xs="12" md="12" lg="6">
                 <ItemCard key={filteredMenu.id} name={filteredMenu.name} price={filteredMenu.price} itemimage={filteredMenu.pictureUrl}/>
                 </Col>
                )       
            })    
        }
       </Row>
    </>
    )
}

export default MenuItems;