import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About MausamTrek</title>
        <meta name="description" content="MausamTrek – Your weather companion for meaningful travel in India." />
      </Head>

      <Navbar />

      
      <div style={styles.backgroundImage} />

      <main style={styles.pageContainer}>
        <section style={styles.contentBox}>
          <h1 style={styles.heading}>About MausamTrek</h1>

          {descriptionParagraphs.map((para, index) => (
            <p key={index} style={styles.paragraph}>
              {para}
            </p>
          ))}

          <footer style={styles.developerInfo}>Developed by Satyam Kumar</footer>
        </section>
      </main>
    </>
  );
};

const descriptionParagraphs = [
  "MausamTrek is more than just a weather app — it’s your travel companion, rooted deeply in the diverse and vibrant landscape of Bharat.",
  "Whether you're trekking through the Himalayas, exploring the deserts of Rajasthan, or strolling along Kerala’s backwaters, knowing the mausam ka mizaz helps you travel smarter and safer.",
  "Our app provides hyper-local, accurate weather updates in a clean and intuitive interface, built to resonate with the way Bharat yatris think, feel, and plan.",
  "We believe weather is not just data — it's a vital part of your journey. That’s why we make it personal, relatable, and rooted in the Indian way of travel — spontaneous, spiritual, and soulful.",
  "From sudden monsoons to sunny temple trails, MausamTrek helps you stay prepared and connected — every step of your journey through the heart of India."
];

const styles = {
  backgroundImage: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'url(/image.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'blur(2px) brightness(0.9)',
    zIndex: -1,
  },
  pageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '100px 20px',
    boxSizing: 'border-box',
  },
  contentBox: {
    background: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '16px',
    padding: '40px 60px',
    maxWidth: '800px',
    width: '100%',
    boxShadow: '0 10px 40px rgba(0,0,0,0.25)',
    backdropFilter: 'blur(12px)',
    transition: 'all 0.3s ease-in-out',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '30px',
    textAlign: 'center',
    color: '#1a1a1a',
    fontWeight: '700',
  },
  paragraph: {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    marginBottom: '20px',
    textAlign: 'justify',
    color: '#2d2d2d',
  },
  developerInfo: {
    textAlign: 'center',
    fontStyle: 'italic',
    color: '#555',
    marginTop: '40px',
    fontSize: '0.95rem',
  },
};

export default AboutPage;
