import React from "react";
import './Header.scss';
import OrderContext from '../contexts/OrderContext';
import { useContext } from "react";
import {Link} from "react-router-dom"
const Header = (props) => 
{
    const cartStyle = {
        color:'white' , 
        textDecoration:'none',
         fontSize:'18px', 
         border:'1px solid white',
         borderRadius:'5px',
         padding:'2px'
    }
    return (

        <>
        <header className="header">
            <div className="navbar-header align-items-center">
                <div className="navbar-brand-image">
                    Gc
                </div>
                <span className="navbar-brand-title">
                    Garcon
                </span>      
            </div>
            <div className="navbar-header align-items-center">
                <Link to='/cart' style={cartStyle} >Cart </Link>
            </div>
        </header>
        </>
    )
};


export default Header;