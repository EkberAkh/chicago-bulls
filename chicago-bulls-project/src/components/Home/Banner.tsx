import './Banner.css';

const Banner = () => {
  return (
    <section className="banner">
    <div className="container">
      <div className="banner-inner">
        <div className="banner-left">
          <p>
            Get ready to be amazed, Bulls coming on <span>October 8</span>{" "}
            on your way!
          </p>
          <button type="button">BUY TICKET</button>
        </div>
        <div className="banner-right"></div>
      </div>
    </div>
  </section>
  )
}

export default Banner