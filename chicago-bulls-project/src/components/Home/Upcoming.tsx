import React from 'react';
import './Upcoming.css'
import bulls from "../../assets/bulls.png";
import thunder from "../../assets/thunder.png";
import nuggets from "../../assets/nuggets.png";
import bucks from "../../assets/bucks.png";


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";

const Upcoming = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1024 },
          items: 3,
          slidesToSlide: 2,
        },
        desktop: {
          breakpoint: { max: 1024, min: 800 },
          items: 2,
          
        },
        tablet: {
          breakpoint: { max: 780, min: 464 },
          items: 1,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          
        },
      };
  return (
    <section className="upcoming">
    <div className="container">
      <h2 className="title">Upcoming games</h2>
      <div className="card-section">
    
        <div className="cards">

          <Carousel partialVisbile={false} draggable={true} autoPlay={true} autoPlaySpeed={3000} showDots={true} infinite={true} responsive={responsive}>



         <Card img={bulls} img2={bucks} date='Oct 8, 12:00 pm'/>
         <Card img={bulls} img2={bucks} date='Oct 8, 12:00 pm'/>
         <Card img={bulls} img2={bucks} date='Oct 8, 12:00 pm'/>
         <Card img={bulls} img2={bucks} date='Oct 8, 12:00 pm'/>
         <Card img={bulls} img2={bucks} date='Oct 8, 12:00 pm'/>
          
          </Carousel>

        </div>

      </div>
    </div>
  </section>
  )
}

export default Upcoming