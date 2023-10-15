import React from "react";
import "./Home.css";
import Banner from "../components/Home/Banner";
import Upcoming from "../components/Home/Upcoming";
import News from "../components/Home/News";
import Gallery from "../components/Home/Gallery";
import About from "../components/Home/About";
import Footer from "../components/Footer";



const Home = () => {
  return (
    <>
      <Banner />
      <Upcoming />
      <News />
      <Gallery />
      <About/>
      <Footer/>
     
    </>
  );
};

export default Home;
