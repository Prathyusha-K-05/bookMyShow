// components/MovieList.js
import React, { useState } from 'react';
import { Table, Button, Modal } from 'react-bootstrap';

const MovieList = () => {
  const movies = [
    { name: 'Spider-Man', genre: 'Action', date: '2024-04-15', rating: 4.5, price: '₹250', img: '/assets/images/spiderman.jpg' },
    { name: 'Avatar 2', genre: 'Sci-Fi', date: '2024-05-01', rating: 4.7, price: '₹300', img: '/assets/images/avatar.jpg' },
    { name: 'KGF Chapter 2', genre: 'Drama', date: '2024-06-10', rating: 4.5, price: '₹200', img: '/assets/images/kgf.jpg' },
     { name: 'Pushpa 2', genre: 'Action drama', date: '2023-10-5', rating: 4.4, price: '₹150', img: '/assets/images/pushpa2.jpg' },
    { name: 'Chaava', genre: 'Historical Action', date: '2024-03-01', rating: 4.8, price: '₹300', img: '/assets/images/chaava.jpg' },
    { name: 'Kantara', genre: 'Action thriller', date: '2024-06-10', rating: 4.3, price: '₹200', img: '/assets/images/kantara.jpg' }
  ];

  // State to control modal visibility and selected movie
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Show modal when "Book Now" is clicked
  const handleShowModal = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  // Close modal and reset selected movie
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedMovie(null);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center">🎬 Now Showing</h2>
      <Table striped bordered hover responsive className="mt-4">
        <thead>
          <tr>
            <th>Movie Name</th>
            <th>Genre</th>
            <th>Release Date</th>
            <th>Rating</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, index) => (
            <tr key={index}>
              <td>
                <img
                  src={movie.img}
                  alt={movie.name}
                  style={{ width: '50px', height: '75px', marginRight: '10px', borderRadius: '5px' }}
                />
                {movie.name}
              </td>
              <td>{movie.genre}</td>
              <td>{movie.date}</td>
              <td>⭐{movie.rating}</td>
              <td>{movie.price}</td>
              <td>
                <Button variant="primary" onClick={() => handleShowModal(movie)}>
                  Book Now
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Booking Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Your Booking</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedMovie ? (
            <>
              <div className="text-center mb-3">
                <img
                  src={selectedMovie.img}
                  alt={selectedMovie.name}
                  style={{ width: '150px', borderRadius: '10px' }}
                />
              </div>
              <h5>{selectedMovie.name}</h5>
              <p>
                🎥 <strong>Genre:</strong> {selectedMovie.genre}
              </p>
              <p>
                📅 <strong>Release Date:</strong> {selectedMovie.date}
              </p>
              <p>
                ⭐ <strong>Rating:</strong> {selectedMovie.rating}
              </p>
              <p>
                💸 <strong>Price:</strong> {selectedMovie.price}
              </p>
            </>
          ) : (
            <p>No movie selected.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="success" onClick={() => alert('🎟️ Booking Confirmed!')}>
            Confirm Booking
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MovieList;

