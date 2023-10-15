import React from "react";
import "./Home.css";
import Banner from "../components/Home/Banner";
import Upcoming from "../components/Home/Upcoming";
import News from "../components/Home/News";
import Gallery from "../components/Home/Gallery";
import about_img from "../assets/about.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Banner />
      <Upcoming />
      <News />
      <Gallery />
      <section className="about">
        <h2 className="title">About us</h2>
        <div className="container">
          <div className="about-wrapper">

          <div className="about-left">
            <img src={about_img} alt="" />
          </div>
          <div className="about-right">
            <p>
              The Chicago Bulls are an American professional basketball team
              based in Chicago. The Bulls compete in the National Basketball
              Association (NBA) as a member of the league's Eastern Conference
              Central Division. The team was founded on January 16, 1966, and
              played its first game during the 1966–67 NBA season. The Bulls
              play their home games at the United Center, an arena on Chicago's
              West Side.
            </p>
            <p>
              The Bulls saw their greatest success during the 1990s when they
              played a major part in popularizing the NBA worldwide. They are
              known for having one of the NBA's greatest dynasties, winning six
              NBA championships between 1991 and 1998 with two three-peats. All
              six of their championship teams were led by Hall of Famers Michael
              Jordan, Scottie Pippen, and coach Phil Jackson. The Bulls are the
              only NBA franchise to win multiple championships while never
              losing an NBA Finals series in their history.
            </p>
            <p>
              The Bulls won 72 games during the 1995–96 season, setting an NBA
              record.
            </p>
            <Link to="/news">See more</Link>
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
