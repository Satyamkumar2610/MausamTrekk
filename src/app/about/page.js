import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';

const AboutPage = () => {

  

  const pageContainerStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh', 
    padding: '80px 20px', 
    boxSizing: 'border-box',
    position: 'relative',
    zIndex: 0, 
    fontFamily: '"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', 
  };

  const contentBoxStyles = {
    
    padding: '40px 50px', 
    borderRadius: '12px', 
    maxWidth: '750px',
    width: '100%',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)', 
    backgroundColor: 'rgba(255, 255, 255, 0.63)', 
    blur : '500px',
   
    border: '1px solid rgba(0, 0, 0, 0.1)', 
    overflow: 'hidden',
  };

  const headingStyles = {
    marginBottom: '30px',
    textAlign: 'center',
    fontSize: '2.8rem',
    fontWeight: '600',
    color: '#1a1a1a', 
    letterSpacing: '1px',
  };

  const paragraphStyles = {
    lineHeight: '1.8', 
    marginBottom: '18px',
    fontSize: '1.05rem',
    color: '#333', 
    textAlign: 'justify',
  };

  const developerInfoStyles = {
    marginTop: '35px',
    textAlign: 'center',
    color: '#555',
    fontSize: '0.95rem',
    fontStyle: 'italic',
  };

  const appDescription = [
    "MausamTrek is more than just a weather app — it’s your travel companion, rooted deeply in the diverse and vibrant landscape of Bharat. Designed with the Indian traveler in mind, MausamTrek blends technology with tradition, logic with emotion.",
    "Whether you're trekking through the Himalayas, exploring the deserts of Rajasthan, or strolling along Kerala’s backwaters, knowing the mausam ka mizaz helps you travel smarter and safer.",
    "Our app provides hyper-local, accurate weather updates in a clean and intuitive interface, built to resonate with the way Bharat yatris think, feel, and plan.",
    "We believe weather is not just data — it's a vital part of your journey, your safar. That’s why we aim to make it personal, relatable, and rooted in the Indian way of travel — spontaneous, spiritual, and soulful.",
    "From sudden monsoons to sunny temple trails, MausamTrek is here to help you feel prepared and connected — every step of your journey through the heart of India."
  ];

  return (
    <>
    <img src = "/image.jpg" alt = "Background" style = {{position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: -1}} />
      <Head>
        <title>About MausamTrek</title>
        <meta name="description" content="Learn more about MausamTrek, your weather companion for travel in India." />
      </Head>


      <Navbar /> 
      <div style={pageContainerStyles}>
        <div style={contentBoxStyles}>
          <h1 style={headingStyles}>About MausamTrek</h1>

          {appDescription.map((text, index) => (
            <p key={index} style={paragraphStyles}>
              {text}
            </p>
          ))}

          <p style={developerInfoStyles}>
            Developed by Satyam Kumar
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;