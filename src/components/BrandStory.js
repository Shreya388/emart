import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./BrandStory.css";

const brandimg = {
    imgone: "https://images.pexels.com/photos/5255232/pexels-photo-5255232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imgtwo: "https://images.pexels.com/photos/4846455/pexels-photo-4846455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
}

function BrandStory() {
    return (
        <div className="brand-story mt-3">
            <Container fluid>
                <Row>
                    <Col md={12} lg={4} sm={12}>
                        <div className="brand-item">
                            <img className="brand-img" src={brandimg.imgone} alt="imgone" />
                        </div>
                    </Col>
                    <Col md={12} lg={4} sm={12}>
                        <div className="brand-item">
                            <div className="brand-content text-white">
                                <h1 className="display-5">Trending Furnitures With High Quality</h1><br />
                                <p>Our furniture is more than just functional; it's an invitation to a world of comfort and elegance. We understand that a home is a canvas where memories are painted.</p>
                                <br /><button className="buy-btn">Buy Collection</button>                            
                            </div>
                        </div>
                    </Col>
                    <Col md={12} lg={4} sm={12}>
                        <div className="brand-item">
                            <img className="brand-img" src={brandimg.imgtwo} alt="imgone" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default BrandStory;