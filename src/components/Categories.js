import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import "./Categories.css";

const categories = [
    { id: 1, title: 'Living Room', image: 'https://images.pexels.com/photos/1125135/pexels-photo-1125135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', link: '/living-room' },
    { id: 2, title: 'Bedroom', image: 'https://images.pexels.com/photos/4740488/pexels-photo-4740488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', link: '/bedroom' },
    { id: 3, title: 'Dining Room', image: 'https://images.pexels.com/photos/534172/pexels-photo-534172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', link: '/dining-room' },
    { id: 4, title: 'Office', image: 'https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', link: '/office' },
    { id: 5, title: 'Outdoor', image: 'https://images.pexels.com/photos/7193577/pexels-photo-7193577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', link: '/outdoor' },
    { id: 6, title: 'Accessories', image: 'https://images.pexels.com/photos/11125319/pexels-photo-11125319.jpeg', link: '/accessories' },
];

const CategorySection = () => {
    return (
        <div className="category">
            <Container className="category-container">
                <h1 className="pre-heading">Explore</h1>
                <h2 className=" mb-4 heading">See Our Categories</h2>
                <Row>
                    {categories.map((category) => (
                        <Col key={category.id} md={4} lg={2} className="mb-4">
                            <Card className="category-card">
                                <Card.Img variant="top" src={category.image} alt={category.title} className="category-img" />
                                <Card.Body>
                                    <Card.Title>{category.title}</Card.Title>
                                    <a href={category.link} className="">
                                        Explore <i class="fa fa-arrow-right"></i>
                                    </a>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default CategorySection;
