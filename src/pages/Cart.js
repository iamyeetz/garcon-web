import React from "react";
import {useContext,useState} from 'react';
import OrderContext from '../contexts/OrderContext'
import {Row,Col} from 'react-bootstrap';
import './Cart.scss';
import {Link} from "react-router-dom"
const Cart = () => {
    const {orders,setOrders} = useContext(OrderContext);
    const [item,setItem] = useState({name : '',quantity : 1,price : 0});

    function handleIncreaseQuantity(){
        var qty = item.quantity + 1;
        setItem({...item , quantity : qty})
     };
     function handleDecreaseQuantity(){
        var qty = item.quantity - 1;
        setItem({...item ,quantity : qty})
     };
    return (
    <>

    <Row>
        <Col xs="12" md="12" lg="12">
        <h4>Cart</h4>
        </Col>
        <Col xs="4" md="5" lg="6">
            Order
        </Col>
        <Col xs="4" md="3" lg="4">
            Quantity
        </Col>
        <Col xs="4" md="3" lg="2">
            Total
        </Col>
        <Col xs="12" md="12" lg="12">
            <hr/>
        </Col>
        </Row>
        {

        orders.map((item) => {
            return (
                <Row className="order-item">
                    <Col xs="12" md="12" lg="6">
                        {item.name}
                    </Col>
                    <Col xs="12" md="12" lg="4">
                    <div className="cart-itemquatity">
                    <div className="cart-itemdecrease" onClick={handleDecreaseQuantity}>-</div>
                    <div className="cart-quatity">{item.quantity}</div>
                    <div className="cart-itemincrease" onClick={handleIncreaseQuantity}>+</div>
                    </div>
                    </Col>
                    <Col xs="12" md="12" lg="2">
                    {item.price * item.quantity}
                    </Col>
                </Row>
            )
        })
        }
        <Col>
        <Link to="/"> Home </Link>
        </Col>

    </>
    )
}
export default Cart;