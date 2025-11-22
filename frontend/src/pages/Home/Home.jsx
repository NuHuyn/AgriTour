import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import PromoSection from '../../components/PromoSection/PromoSection'
const Home = () => {

  return (
    <div>
      <Header/>
       <div className="home-wrapper">

      {/* BANNER /}

      {/* ABOUT US SECTION */}
      <section className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2>Who We Are</h2>
            <p>
              AGRITOUR is a community–driven travel platform that connects travelers 
              with authentic rural experiences. We bring you closer to nature, 
              local farmers, and unique cultural stories that exist only in peaceful 
              countryside areas of Vietnam.
            </p>
          </div>

          <div className="about-img">
            <img 
              src="https://media.vneconomy.vn/w800/images/upload/2022/10/27/5c932a68-7214-4a19-9eac-12ebfcb42959.jpg"
              alt="about"
            />
          </div>
        </div>
      </section>
      <div className="home-section">
        <PromoSection />
      </div>

      {/* MISSION - VISION */}
      <section className="mission-container">
        <h2>Our Mission & Vision</h2>
        <div className="mission-cards">

          <div className="mission-card">
            <h3>Mission</h3>
            <p>
              To create sustainable travel experiences that support local farmers, 
              protect the environment, and offer travelers a peaceful escape 
              from urban life.
            </p>
          </div>

          <div className="mission-card">
            <h3>Vision</h3>
            <p>
              To become the leading platform for authentic agritourism in Vietnam, 
              where every journey strengthens the bond between people and nature.
            </p>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-container">
        <h2>Why Choose AGRITOUR?</h2>

        <div className="why-items">

          <div className="why-item">
            <h4>🌿 Authentic Rural Experiences</h4>
            <p>Enjoy peaceful landscapes, farming activities, and village culture.</p>
          </div>

          <div className="why-item">
            <h4>🤝 Connect with Local People</h4>
            <p>Meet local farmers and learn real stories from their daily life.</p>
          </div>

          <div className="why-item">
            <h4>🌎 Sustainable Travel</h4>
            <p>Your trip supports local communities and eco-friendly tourism.</p>
          </div>

          <div className="why-item">
            <h4>📸 Beautiful Memories</h4>
            <p>Capture unforgettable moments in stunning natural locations.</p>
          </div>

        </div>
      </section>

    </div>
    </div>
  )
}

export default Home
