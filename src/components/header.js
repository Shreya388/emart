import React from 'react';
import "./header.css";
import { Row, Col, Button } from 'react-bootstrap';

const Header = () => {
    return (
        <div className="Header">
            <div className="header-container">
                <Row>
                    <Col md={12} lg={9} sm={12}>
                        <div className="header-content">
                            <p>$2.099 <span>$2,500</span></p>
                            <h1 className='display-4 thin'>LIVING ROOM</h1>
                            <h1 className='display-4 bold'>MODERN SOFA</h1>
                            <Button className="shop-btn">SHOP NOW <i className="fa fa-cart-shopping"></i></Button>
                            
                        </div>
                    </Col>
                    <Col md={12} lg={3} sm={12}>
                        <div className="header-offer">
                            <div className="offer-cont">
                                <h1 className="up-to">UP TO</h1>
                                <h1 className="percent">50%</h1>
                            </div>
                        </div>
                    </Col>
                </Row>

            </div>
        </div>

    );
};

export default Header;
