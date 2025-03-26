// components/MovieList.js
import React from 'react';
import { Table, Button } from 'react-bootstrap';

const MovieList = () => {
  const movies = [
    { name: 'Spider-Man', genre: 'Action', date: '2024-04-15', rating: 4.5, price: '₹250' },
    { name: 'Avatar 2', genre: 'Sci-Fi', date: '2024-05-01', rating: 4.7, price: '₹300' },
    { name: 'KGF Chapter 2', genre: 'Drama', date: '2024-06-10', rating: 4.6, price: '₹200' }
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center">Now Showing</h2>
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
              <td>{movie.name}</td>
              <td>{movie.genre}</td>
              <td>{movie.date}</td>
              <td>{movie.rating}</td>
              <td>{movie.price}</td>
              <td>
                <Button variant="primary">Book Now</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MovieList;
