import './Footer.css'
import logo from '../../assets/logo.png'; 
import insta from '../../assets/instagram.png'; 
import fb from '../../assets/facebook.png'; 
import youtube from '../../assets/youtube.png'; 
import twitter from '../../assets/twitter.png'; 
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const {t} = useTranslation();
  return (
    <footer>
    <div className="container">
      <div className="footer-wrapper">
        <div className="logo">
          <img src={logo} alt="logo" />
          <div className="social">
            <img src={insta} alt="insta" />
            <img src={fb} alt="fb" />
            <img src={youtube} alt="yt" />
            <img src={twitter} alt="twitter" />

          </div>
        </div>
        <div className="team footer-item">
          <h3 className="title">{t("TEAM")}</h3>
          <ul>
            
            <li>{t("TeamRoster")}</li>
            <li>{t("Stats")}</li>
            <li>{t("TeamLeaders")}</li>
            <li>{t("StaffDirectory")}</li>
            <li>{t("CareerOpportunities")}</li>
          </ul>
        </div>
        <div className="ticket footer-item">
        <h3 className="title">{t("TICKET")}</h3>

          <ul>

            <li>{t("ClickTix")}</li>
            <li>{t("Schedule")}</li>
            <li>{t("SeasonTickets")}</li>
            <li>{t("SingleTickets")}</li>
            <li>{t("GroupTickets")}</li>
            <li>{t("FamilyTicketPAcks")}</li>
            <li>{t("StudentPass")}</li>
            <li>{t("PrintSchedule")}</li>
            <li>{t("WindyCity")}</li>
          </ul>
        </div>
        <div className="empty"></div>
        <div className="shop footer-item">
        <h3 className="title">{t("SHOP")}</h3>

          <ul>
            <li>{t("JERSEY")}</li>
            <li>{t("HATS")}</li>
            <li>{t("TSHIRT")}</li>
            <li>{t("KIDS")}</li>
            <li>{t("MadhouseTeamStore")}</li>
          
          </ul>
        </div>
        <div className="footer-news footer-item">
        <h3 className="title">{t("NEWS")}</h3>

          <ul>
            <li>Sam Smith</li>
            <li>{t("ChuckChecksIn")}</li>
            <li>{t("PartnerNews")}</li>
            <li>{t("InjuryReport")}</li>
            <li>{t("GameNotes")}</li>
            <li>2022‑23 {t("Media Guidee")}</li>
          
          </ul>
        </div>
      </div>
      <div className="footer-end">
        <p>{t("Copyright")}</p>
        <p>{t("Footer1")}</p>
        <p>{t("Footer2")}</p>
        <p>{t("Footer3")}</p>
      </div>
    </div>
  </footer>
  )
}