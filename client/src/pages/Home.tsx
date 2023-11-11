
import Banner from "../components/Home/Banner";
import Upcoming from "../components/Home/Upcoming";
import News from "../components/Home/News";
import Gallery from "../components/Home/Gallery";
import About from "../components/Home/About";
import { AnimatedPage } from "../AnimatedPage";


const Home = () => {
  return (
    <>
      <AnimatedPage>
        <Banner />
        <Upcoming />
        <News />
        <Gallery />
        <About />
      </AnimatedPage>
    </>
  );
};

export default Home;
