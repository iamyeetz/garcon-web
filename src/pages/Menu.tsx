import React from "react";
import Classification from "../components/Classification";
import CategoryCard from "../components/CategoryCard";
import {Row,Col} from 'react-bootstrap';
import {Link} from "react-router-dom"
import CategoryData from '../data/category.json'
const Menu =  () => {

    return (
        <>     
        <Row>
            <Col xs="12" md="12" lg="6">
                <CategoryCard categoryname="Add All Chef's Recommendation" imageurl="assets/images/recommend.svg" route="/orderstatus"></CategoryCard>
            </Col>
            {
                CategoryData.map((category,index) => {
                 return (
                    <Col xs="12" md="12" lg="6">
                        <Link to="/menu/menuitems" state={{
                        classification : category.classification,
                        }}>
                            <Classification id={category.id} categoryname={category.name} imageurl={category.imageurl} ></Classification>
                        </Link>
                    </Col>
                 )
                })
            }
        </Row>
        </>
    )
}

export default Menu;