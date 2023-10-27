import './About.css';
import about_img from "../../assets/about.png";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const About = () => {
  const {t} = useTranslation();
  return (
    <section className="about">
        <h2 className="title">{t("AboutUs")}</h2>
        <div className="container">
          <div className="about-wrapper">

          <div className="about-left">
            <img src={about_img} alt="" />
          </div>
          <div className="about-right">
            <div className="paragraphs">

            <p>
            {t("AboutMain1")}
            </p>
            <p>
            {t("AboutMain2")}
            </p>
            <p>
            {t("AboutMain3")}
            </p>
            <Link className='link' to="/news">{t("SeeMore")}</Link>
            </div>
          </div>
          </div>
        </div>
      </section>
  )
}

export default About