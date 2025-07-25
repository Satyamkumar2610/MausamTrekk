"use client";
import React from 'react';
import Navbar from '../components/Navbar';

// This component holds all the styles for the blog page.
const BlogStyles = () => (
  <style jsx global>{`
    .blog-layout {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      color: #2C3E50;
    }

    .hero-section {
      height: 60vh;
      background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?q=80&w=2670&auto=format&fit=crop');
      background-size: cover;
      background-position: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      color: white;
      padding: 20px;
    }

    .hero-section h1 {
      font-size: 3.5rem;
      font-weight: 700;
      margin: 0;
      text-shadow: 2px 2px 8px rgba(0,0,0,0.6);
    }

    .hero-section p {
      font-size: 1.2rem;
      margin-top: 10px;
      max-width: 600px;
      opacity: 0.9;
    }

    .blog-content-area {
      max-width: 800px;
      margin: -80px auto 50px auto; /* Pulls the content up over the hero image */
      background-color: white;
      border-radius: 12px;
      padding: 40px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
      position: relative;
      z-index: 5;
    }

    .author-info {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-bottom: 30px;
      color: #555;
    }

    .author-info img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }

    .article-title {
      font-size: 2.5rem;
      margin-bottom: 20px;
      line-height: 1.2;
    }

    .article-body h2 {
      font-size: 1.8rem;
      margin-top: 40px;
      margin-bottom: 15px;
      border-bottom: 2px solid #f0f0f0;
      padding-bottom: 10px;
    }

    .article-body p {
      line-height: 1.8;
      font-size: 1.1rem;
      margin-bottom: 20px;
    }

    .article-body a {
      color: #2E73E8;
      text-decoration: none;
      font-weight: 600;
    }
    .article-body a:hover {
      text-decoration: underline;
    }
  `}</style>
);


export default function BlogPage() {
  return (
    <>
    <Navbar/>
      <BlogStyles />
      <div className="blog-layout">
        <header className="hero-section">
          <h1>MausamTrek Blog</h1>
          <p>Your guide to understanding weather patterns and making the most of your travels across India.</p>
        </header>

        <main className="blog-content-area">
          <div className="author-info">
            <img src="https://placehold.co/100x100/EFEFEF/333?text=MT" alt="Author Avatar" />
            <div>
              <strong>MausamTrek Team</strong>
              <p style={{margin: 0, fontSize: '0.9rem'}}>Published on July 25, 2025</p>
            </div>
          </div>

          <h1 className="article-title">Why a Good Weather App is Your Best Travel Companion in India</h1>

          <article className="article-body">
            <p>
              India, a land of diverse landscapes and even more diverse climates, presents a unique challenge for any traveler. From the snow-capped Himalayas in the north to the tropical backwaters of Kerala in the south, the weather can change dramatically. This is where a reliable weather app, like <a href="/">MausamTrek</a>, transforms from a simple utility into an essential travel partner.
            </p>

            <h2>Beyond Just Temperature: Planning Your Day</h2>
            <p>
              Modern weather apps do more than just tell you if it's hot or cold. They provide crucial data like humidity, wind speed, and the "feels like" temperature, which are vital for planning your activities. A trip to Jaipur in May isn't just about the 45°C heat; it's about knowing when humidity will be lowest for a comfortable visit to Amer Fort. Similarly, knowing the wind speed is critical for anyone planning a paragliding trip in Bir Billing.
            </p>

            <h2>Monsoon Treks and Himalayan Adventures</h2>
            <p>
              The Indian monsoon is a magical time, but it demands respect. A good weather app provides hourly precipitation forecasts, helping you decide the perfect window for a trek in the Western Ghats or avoid a flash flood in Uttarakhand. For Himalayan expeditions, tracking weather patterns is a matter of safety. Apps that provide multi-day forecasts help trekkers and mountaineers make informed decisions about acclimatization and summit attempts.
            </p>

            <h2>The MausamTrek Advantage</h2>
            <p>
              At <a href="/">MausamTrek</a>, we understand the specific needs of an Indian user. Our app provides detailed, location-specific forecasts, from bustling cities like Mumbai to remote villages in Ladakh. We aim to give you the most accurate data, so you can spend less time worrying about the weather and more time enjoying the incredible beauty of India.
            </p>
            <p>
              So, before you pack your bags for your next adventure, make sure you have a reliable weather app downloaded. It might just be the most important item in your travel kit.
            </p>
          </article>
        </main>
      </div>
    </>
  );
}
