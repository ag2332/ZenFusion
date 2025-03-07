import React from 'react';
import './App.css';
import Nav from "./components/Nav"
import Main from "./components/Main"
import Footer from './components/Footer';
import About from './components/About';
import Speciality from './components/Speciality';
import Carousel from './components/Carousel';
import Hero from './components/Hero';
import CarouselHero from './components/CarouselHero';


function App() {
  return (
    <>
    <Nav/>
    <Hero/>
    <About/>
    <Speciality/>
    <Main/>
    <CarouselHero/>
    <Carousel/>
    <Footer/>
    </>
  );
}

export default App;
