"use client";
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutPageStyles = () => (
  <style jsx global>{`
    .about-layout {
      font-family: 'Inter', sans-serif;
      color: #2C3E50;
    }
    .hero-section {
      height: 50vh;
      background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1525183995014-bd94c0750cd5?q=80&w=2670&auto=format&fit=crop');
      background-size: cover;
      background-position: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      color: white;
    }
    .hero-section h1 {
      font-size: 3rem;
      text-shadow: 2px 2px 8px rgba(0,0,0,0.6);
    }
    .content-area {
      max-width: 800px;
      margin: -80px auto 50px auto;
      background-color: white;
      border-radius: 12px;
      padding: 50px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
      position: relative;
    }
    .content-area h2 {
      font-size: 1.8rem;
      margin-top: 30px;
      border-bottom: 2px solid #f0f0f0;
      padding-bottom: 10px;
    }
    .content-area p {
      line-height: 1.8;
      font-size: 1.1rem;
    }
  `}</style>
);

export default function AboutPage() {
  return (
    <>
    <Navbar/>
      <AboutPageStyles />
      <div className="about-layout">
        <header className="hero-section">
          <h1>About MausamTrek</h1>
        </header>

        <main className="content-area">
          <h2>Our Mission</h2>
          <p>
            India, a land of diverse landscapes and even more diverse climates, presents a unique challenge for any traveler. From the snow-capped Himalayas in the north to the tropical backwaters of Kerala in the south, the weather can change dramatically. Our mission at MausamTrek is to empower every traveler in India with accurate, reliable, and easy-to-understand weather information.
          </p>

          <h2>Why We Built This</h2>
          <p>
            We believe that a good weather app is an essential travel partner. It goes beyond just temperature, providing crucial data like humidity, wind speed, and precipitation forecasts that are vital for planning your activities, ensuring your safety, and making your journey more comfortable.
          </p>
          
          <h2>The MausamTrek Advantage</h2>
          <p>
            At MausamTrek, we understand the specific needs of an Indian user. Our app provides detailed, location-specific forecasts, from bustling cities like Mumbai to remote villages in Ladakh. We aim to give you the most accurate data, so you can spend less time worrying about the weather and more time enjoying the incredible beauty of India.
          </p>
        </main>
        <Footer />
      </div>
    </>
  );
}