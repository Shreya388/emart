import React, { useState } from "react";
import { Container, Row, Card, Col, Button } from "react-bootstrap";
import "./BestSellers.css";
import { MdClear } from "react-icons/md";


const imageUrls = [
  {
    id: 1,
    title: "Black Standard Chair",
    price: "$900",
    url: "https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    title: "Grey Stylish Modern Sofa ",
    price: "$1,200",
    url: "https://images.pexels.com/photos/11112735/pexels-photo-11112735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    title: "Orange Lightweight Chair",
    price: "$800",
    url: "https://images.pexels.com/photos/12269761/pexels-photo-12269761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 4,
    title: "Blue Wavy light Chair",
    price: "$879",
    url: "https://images.pexels.com/photos/16249593/pexels-photo-16249593/free-photo-of-chair-with-pillow.jpeg"
  },
  {
    id: 5,
    title: "Orange Cushioned Comfortable Sofa",
    price: "$3,079",
    url: "https://images.pexels.com/photos/17264276/pexels-photo-17264276/free-photo-of-living-room-picture-frame-mockup-a01_01-3d-rendering.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 6,
    title: "Dark Maroon Single Sofa",
    price: "$990",
    url: "https://images.pexels.com/photos/11112727/pexels-photo-11112727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 7,
    title: "Wooden Coloured Drawer Sofa",
    price: "$420",
    url: "https://images.pexels.com/photos/11112745/pexels-photo-11112745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 8,
    title: "Grey Interesting Sofa",
    price: "$760",
    url: "https://images.pexels.com/photos/13718035/pexels-photo-13718035.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];


const BestSellers = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleCardClick = (imageUrl) => {
    setSelectedItem(imageUrl);
  };

  const handleCloseButtonClick = () => {
    setSelectedItem(null);
  };


  return (
    <div className="BestSeller">
      <Container>
        <p className="pre-heading">Best Seller</p>
        <p className="heading">Best Selling Products</p>
        <Row>
          {imageUrls.map((imageUrl) => (
            <Col lg={3} md={6} sm={12} key={imageUrl.id}>
              <div className="img-cont pt-4 p-2">
                <Card className="border-0" onClick={() => handleCardClick(imageUrl)}>
                  <Card.Img variant="top" src={imageUrl.url} className="product-img" />
                  <Card.Body>
                    <h1 className="product-title">{imageUrl.title}</h1>
                    <p className="product-price">{imageUrl.price}</p>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          ))}
        </Row>

        {selectedItem && (
          <div className="big-div">
            <Card key={selectedItem.id} className="border-0">
              <Card.Img variant="top" src={selectedItem.url} alt={selectedItem.title} className="big-item" />
              <Button variant="danger" className="close-button" onClick={handleCloseButtonClick}>
                <MdClear />
              </Button>
            </Card>
          </div>
        )}
      </Container>
    </div>
  );
};


export default BestSellers;