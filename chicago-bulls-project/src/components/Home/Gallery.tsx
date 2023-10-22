import gallery from '../../assets/gallery.png';
import gallery1 from '../../assets/gallery1.png';
import gallery2 from '../../assets/gallery2.png';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Gallery.css'

const Gallery = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 1500, min: 1045 },
          items: 4,
          slidesToSlide: 2,

        },
        desktop: {
          breakpoint: { max: 1045, min: 650 },
          items: 3,
          
        },
        tablet: {
          breakpoint: { max: 650, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2,
          
        },
      };
  return (
    <section className="gallery">
      <div className="container">
        <h2 className="title">Gallery</h2>
        <div className="gallery-wrapper">

          <Carousel  keyBoardControl={true} draggable={true} showDots={true} autoPlay={true} autoPlaySpeed={3000} infinite={true} responsive={responsive}>

          <div className="gallery-item">
            <img src={gallery} alt="" />
          </div>
          <div className="gallery-item">
            <img src={gallery1} alt="" />
          </div>
          <div className="gallery-item">
            <img src={gallery2} alt="" />
          </div>
          <div className="gallery-item">
            <img src={gallery} alt="" />
          </div>
          <div className="gallery-item">
            <img src={gallery1} alt="" />
          </div>
          <div className="gallery-item">
            <img src={gallery2} alt="" />
          </div>
          <div className="gallery-item">
            <img src={gallery} alt="" />
          </div>
          <div className="gallery-item">
            <img src={gallery1} alt="" />
          </div>


          </Carousel>
      
        </div>
      </div>
     </section>
  )
}

export default Gallery