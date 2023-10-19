import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Products.css";

const Image = {

    one: "https://images.pexels.com/photos/189333/pexels-photo-189333.jpeg",
    two: "https://images.pexels.com/photos/15860800/pexels-photo-15860800/free-photo-of-modern-cafe-interior.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
}

const Products = () => {
    return (
        <div className="Products">
            <Container fluid>
                <Row>
                    <Col md={6} lg={3} sm={12}>
                        <div className="img-cont">
                            <Card.Img variant="top" src={Image.two} className="show-img" />
                        </div>
                    </Col>
                    <Col md={6} lg={9} sm={12}>
                        <div className="img-cont">
                            <Card.Img variant="top" src={Image.one} className="show-img" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}




export default Products;