import "./Banner.css";
import gallery_banner from "../../../assets/gallery-banner.png";
const Banner = () => {
  return (
    <div className="background">
      <img src={gallery_banner} />
      <div className="container container-sm">
        <p className="text">Run with the bulls, the journey's worth it!</p>
      </div>
    </div>
  );
};

export default Banner;
