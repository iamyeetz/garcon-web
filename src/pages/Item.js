import React from "react";
import {Row,Col} from 'react-bootstrap';
import { useContext,useState,useEffect } from "react";
import { redirect, useLocation,useNavigate } from "react-router-dom";
import ItemCard from '../components/ItemCard';
import {Link} from "react-router-dom"
import OrderContext from "../contexts/OrderContext.js"
import './Item.scss';



const Item = () => {
   const {orders,setOrders} = useContext(OrderContext);
   const { state } = useLocation();
   const [item,setItem] = useState({name : '',quantity : 1,price : 0});
   const navigate = useNavigate();
   var currentOrder;
   function handleAddToCart()
   {
      var itemName = state.name;
      var filteredItems = orders.filter((item) => item.name != itemName)
      currentOrder =  filteredItems;
      setOrders( [...currentOrder , item]);     
      navigate('/');
   };
   function handleIncreaseQuantity(){
      var qty = item.quantity + 1;
      setItem({...item , quantity : qty})
   };
   function handleDecreaseQuantity(){
      var qty = item.quantity - 1;
      setItem({...item ,quantity : qty})
   };
   function setValues(){
    
      var itemName = state.name;
      var item =  orders.find((item) => item.name == itemName)
      if(item)
      {
         setItem({...item , name : item.name , quantity : item.quantity , price : item.price});
      }
      else{
         setItem({...item , name : state.name , quantity : 1 , price : state.price});
      }

   }
   useEffect(() => {
      setValues();
   },[])

     return ( 
        <>
        <h1>Menu Details</h1>
        <Row>
         <Col xs="12" md="12" lg="12">
            <ItemCard key={state.key} itemimage={state.itemimage} name={state.name} price={state.price}></ItemCard>

            </Col>
            <Col xs="12" md="12" lg="12">
            <div className="itemquatity">
            <div className="itemdecrease" onClick={handleDecreaseQuantity}>-</div>
            <div className="quatity">{item.quantity}</div>
            <div className="itemincrease" onClick={handleIncreaseQuantity}>+</div>
            </div>
            </Col>
            <Col xs="12" md="12" lg="12">
            <h4>
            Price : <small>{item.price * item.quantity}</small>
            </h4>
            </Col>
            <Col xs="12" md="12" lg={{span:4 , offset : 4}}>
            <div className="options">
               <div className="addtocart" onClick={handleAddToCart}>Add to Cart</div>
               <div><Link to="/cart" style={{textDecoration:'none'}}>View Cart</Link></div>
               <div><Link to="/menu" style={{textDecoration:'none'}}>Back to Menu</Link></div>
            </div>
            </Col>
        </Row>
        </>
     )
}

export default Item;