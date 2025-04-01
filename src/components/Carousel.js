// components/Carousel.js
import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../styles/index.css';

const MovieCarousel = () => {
  const movies = [
    { id: 1, title: 'Spider-Man: No Way Home', img: '/assets/images/spiderman.jpg' },
    { id: 2, title: 'Avatar 2', img: '/assets/images/avatar.jpg' },
    { id: 3, title: 'Top Gun: Maverick', img: '/assets/images/topgun.jpg' },
    { id: 4, title: 'Bahubali-2', img: '/assets/images/bahubali2.jpg' }
  ];
  const indian=[
    {id:1, title:'Bahubali-2',img:'/assets/images/bahubali2.jpg'},
    {id:2, title:"S S Rajamouli's RRR",img:'/assets/images/rrr.jpg'},
    {id:3, title:'Sita Ramam',img:'/assets/images/sitaramam.jpg'},
  ];
  const songs=[
    {id:1, title:"Shreya's Melody hits" ,img:'/assets/images/shreya-ghoshal.jpg'},
    {id:2, title:"Arjit Hits", img:'/assets/images/ArjitSingh.jpeg'}
  ];

  return (
    <div className='carousel-container'>
    <h2 className='carousel-heading text-center'>Trending Movies</h2>
    <Carousel fade interval={3000} pause="hover">
      {movies.map((movie) => (
        <Carousel.Item key={movie.id} interval={3000}>
          <img className="d-block w-100 carousel-img" src={movie.img} alt={movie.title} />
          <Carousel.Caption>
            <h3>{movie.title}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>

    <h2 className='carousel-heading text-center'>Indian Movies</h2>
    <Carousel fade interval={3000} pause="hover">
      {indian.map((movie) => (
        <Carousel.Item key={movie.id} interval={3000}>
          <img className="d-block w-100 carousel-img" src={movie.img} alt={movie.title} />
          <Carousel.Caption>
            <h3>{movie.title}</h3>
          </Carousel.Caption>
        </Carousel.Item>        
      ))}
    </Carousel>

    <h2 className='carousel-heading text-center'>Indian Movies</h2>
    <Carousel fade interval={3000} pause="hover">
      {songs.map((song) => (
        <Carousel.Item key={song.id} interval={3000}>
          <img className="d-block w-100 carousel-img" src={song.img} alt={song.title} />
          <Carousel.Caption>
            <h3>{song.title}</h3>
          </Carousel.Caption>
        </Carousel.Item>        
      ))}
    </Carousel>
    </div>
  );
};

export default MovieCarousel;
