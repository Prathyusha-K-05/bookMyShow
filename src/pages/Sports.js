import React, {useState} from "react";
import { Card, Button, Row, Col, Container,Carousel,Modal } from 'react-bootstrap';

const sports = [
  {
    id: 1,
    name: 'Hockey Playoffs-Final',
    date: '2025-12-28',
    location: 'Delhi',
    price: '₹1999',
    img: '/assets/images/hockey.jpg'
  },
  {
    id: 2,
    name: 'IPL Finals 2025',
    date: '2025-05-29',
    location: 'Bengaluru',
    price: '₹2999',
    img: '/assets/images/ipl.jpg'
  },
  {
    id: 3,
    name: 'TRIATHLON- on International Day of Sports',
    date: '2025-07-18',
    location: 'Manglore',
    price: '₹2499',
    img: '/assets/images/triathlon.jpg'
  },
  {
    id: 4,
    name: 'Open Chess Tournament-2025',
    date: '2025-08-14',
    location: 'Bhopal',
    price: '₹1500',
    img: '/assets/images/chess.jpg'
  }
];

const weekend=[
    {id:1,title:"IPL Finals 2025",img:'/assets/images/ipl.jpg'},
    {id:2,title:"Hockey Playoffs-FINAL",img:'/assets/images/hockey.jpg'},
    {id:3,title:"On this International day of Sports-TRIATHLON",img:'/assets/images/triathlon.jpg'}
];

const Sports = () => {
    const [showModal,setShowModal]=useState(false);
    const[selectedEvent,setSelectedEvent]=useState(null);

    const handleShowModal=(event)=>{
        setSelectedEvent(event);
        setShowModal(true);
    };

    const handleCloseModal=()=>{
        setShowModal(false);
        setSelectedEvent(null);
    };
  return (
    <Container className="my-5">
      <h2 className='carousel-heading text-center'>Weekend Sports </h2>
       <Carousel fade interval={3000} pause="hover">
      {weekend.map((event) => (
        <Carousel.Item key={event.id} interval={3000}>
          <img className="d-block w-100 carousel-img" src={event.img} alt={event.title} />
          <Carousel.Caption>
            <h3>{event.title}</h3>
          </Carousel.Caption>
        </Carousel.Item>
        ))}
       </Carousel>

      <h2 className="text-center mb-4 ">Highlights 💫</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {sports.map((sport) => (
          <Col key={sport.id}>
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={sport.img}
                alt={sport.name}
                className="event-img"
              />
              <Card.Body>
                <Card.Title>{sport.name}</Card.Title>
                <Card.Text>
                  📅 <strong>Date:</strong> {sport.date}
                  <br />
                  📍 <strong>Location:</strong> {sport.location}
                  <br />
                  💸 <strong>Price:</strong> {sport.price}
                </Card.Text>
                <Button variant="primary" onClick={()=>handleShowModal(sport)}>Book Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Modal show={showModal} 
             onHide={handleCloseModal}
             centered
             backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
            <Modal.Title>Confirm Your Booking</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {selectedEvent ? (
            <>
              <h5>{selectedEvent.name}</h5>
              <p>
                📅 <strong>Date:</strong> {selectedEvent.date}
              </p>
              <p>
                📍 <strong>Location:</strong> {selectedEvent.location}
              </p>
              <p>
                💸 <strong>Price:</strong> {selectedEvent.price}
              </p>
            </>
          ):(
            <p>No event selected</p>
          )}
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>Cancel</Button>
            <Button variant="success" onClick={()=>alert("Booking Confirmed!")}>Confirm Booking</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Sports;
