import './Footer.css'
import logo from '../../assets/logo.png'; 
import insta from '../../assets/instagram.png'; 
import fb from '../../assets/facebook.png'; 
import youtube from '../../assets/youtube.png'; 
import twitter from '../../assets/twitter.png'; 

export const Footer = () => {
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
          <h3 className="title">team</h3>
          <ul>
            
            <li>Team Roster</li>
            <li>Stats</li>
            <li>Team Leaders</li>
            <li>Staff Directory</li>
            <li>Career Opportunities</li>
          </ul>
        </div>
        <div className="ticket footer-item">
        <h3 className="title">ticket</h3>

          <ul>

            <li>Click Tix</li>
            <li>Schedule</li>
            <li>Season Tickets</li>
            <li>Single Tickets</li>
            <li>Group Tickets</li>
            <li>Family Ticket Packs</li>
            <li>Student Pass</li>
            <li>Print Schedule</li>
            <li>Windy City</li>
          </ul>
        </div>
        <div className="empty"></div>
        <div className="shop footer-item">
        <h3 className="title">shop</h3>

          <ul>
            <li>Jerseys</li>
            <li>Hats</li>
            <li>T‑Shirts</li>
            <li>Kids</li>
            <li>Madhouse Team Store</li>
          
          </ul>
        </div>
        <div className="footer-news footer-item">
        <h3 className="title">news</h3>

          <ul>
            <li>Sam Smith</li>
            <li>Chuck Checks In</li>
            <li>Partner News</li>
            <li>Injury Report</li>
            <li>Game Notes</li>
            <li>2022‑23 Media Guidee</li>
          
          </ul>
        </div>
      </div>
      <div className="footer-end">
        <p>Copyright © 2023 All rights reserved.</p>
        <p>Privacy Policy | Terms of Use | Customer Support | Accessibility and Closed Captions | Your Privacy Choices</p>
        <p>Cookie Policy | EEA/UK Privacy Statement | Brazil Privacy Statement | California Consumer Privacy Statement | Colorado Consumer Privacy Statement</p>
        <p>If you are having difficulty accessing any content on this website, please visit our Accessibility page.</p>
      </div>
    </div>
  </footer>
  )
}