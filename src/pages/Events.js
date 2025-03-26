// pages/Events.js
import React from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';

const events = [
  {
    id: 1,
    name: 'Sunburn Goa 2025',
    date: '2025-12-28',
    location: 'Goa',
    price: '₹1999',
    img: '/assets/images/sunburn.jpeg'
  },
  {
    id: 2,
    name: 'IPL Finals 2025',
    date: '2025-05-29',
    location: 'Mumbai',
    price: '₹2999',
    img: '/assets/images/ipl.jpg'
  },
  {
    id: 3,
    name: 'Arijit Singh Live Concert',
    date: '2025-07-18',
    location: 'Delhi',
    price: '₹2499',
    img: '/assets/images/ArjitSingh.jpeg'
  },
  {
    id: 4,
    name: 'Comic Con 2025',
    date: '2025-08-14',
    location: 'Bengaluru',
    price: '₹1500',
    img: '/assets/images/comic.jpeg'
  }
];

const Events = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">🎉 Upcoming Events</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {events.map((event) => (
          <Col key={event.id}>
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={event.img}
                alt={event.name}
                className="event-img"
              />
              <Card.Body>
                <Card.Title>{event.name}</Card.Title>
                <Card.Text>
                  📅 <strong>Date:</strong> {event.date}
                  <br />
                  📍 <strong>Location:</strong> {event.location}
                  <br />
                  💸 <strong>Price:</strong> {event.price}
                </Card.Text>
                <Button variant="primary">Book Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Events;
