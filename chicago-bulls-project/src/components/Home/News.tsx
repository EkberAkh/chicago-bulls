import React from 'react';
import './News.css';
import newsImg from '../../assets/news.png';
import newsImg1 from '../../assets/news(1).png';
import newsImg2 from '../../assets/news(2).png';

const News = () => {
  return (
    <section className="news">
        <h2 className="title">Top news</h2>
        <div className="container">
          <div className="news-wrapper">
            <div className="news-card">
              <div className="news-img">
                <img src={newsImg} alt="" />
              </div>
              <div className="news-title">
                <b>Remembering Pau Gasol's time as a Chicago Bull as he prepares to enter Basketball Hall of Fame.</b>
              </div>
              <div className="news-content">
                <p>Gasol was an All-Star in both his Bulls seasons, his first All-Star selections in four years, started the 2015 All-Star game opposite his brother Marc in an historic NBA first, was All-NBA, scored a career best 46 points, led the league in double-doubles and became the fourth player in league history older than 35 with multiple triple doubles in one season.</p>
              </div>
              <div className="news-end">
                <span className="date">
                Sep 17, 2023 • 1:10 PM
                </span>
                <span className="views">
                20k views
                </span>
              </div>
            </div>
            <div className="news-card news-2">
              <div className="news-img">
                <img src={newsImg1} alt="" />
              </div>
              <div className="news-title">
                <b>Remembering Pau Gasol's time as a Chicago Bull as he prepares to enter Basketball Hall of Fame.</b>
              </div>
              <div className="news-content">
                <p>Gasol was an All-Star in both his Bulls seasons, his first All-Star selections in four years, started the 2015 All-Star game opposite his brother Marc in an historic NBA first, was All-NBA, scored a career best 46 points, led the league in double-doubles and became the fourth player in league history older than 35 with multiple triple doubles in one season.</p>
              </div>
              <div className="news-end">
                <span className="date">
                Sep 17, 2023 • 1:10 PM
                </span>
                <span className="views">
                20k views
                </span>
              </div>
            </div>
            <div className="news-card news-3">
              <div className="news-img">
                <img src={newsImg2} alt="" />
              </div>
              <div className="news-title">
                <b>Remembering Pau Gasol's time as a Chicago Bull as he prepares to enter Basketball Hall of Fame.</b>
              </div>
              <div className="news-content">
                <p>Gasol was an All-Star in both his Bulls seasons, his first All-Star selections in four years, started the 2015 All-Star game opposite his brother Marc in an historic NBA first, was All-NBA, scored a career best 46 points, led the league in double-doubles and became the fourth player in league history older than 35 with multiple triple doubles in one season.</p>
              </div>
              <div className="news-end">
                <span className="date">
                Sep 17, 2023 • 1:10 PM
                </span>
                <span className="views">
                20k views
                </span>
              </div>
            </div>
          </div>
        </div>

      </section>
  )
}

export default News