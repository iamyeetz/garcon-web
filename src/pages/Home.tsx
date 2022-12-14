import React from "react";
import CategoryCard from '../components/CategoryCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col} from 'react-bootstrap';
const Home =  () => {

    return (
        <>     
            <Row>
                <Col xs="12" md="12" lg="6">
                <CategoryCard categoryname='Order status' imageurl='assets/images/order.svg' route="/orderstatus"></CategoryCard>
                </Col>
                <Col xs="12" md="12" lg="6">
                <CategoryCard categoryname='Menu' imageurl='assets/images/menu.svg' route="/menu"></CategoryCard>
                </Col>
            </Row>
        </>
    )
}

export default Home;