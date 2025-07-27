"use client";
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const styles = {
  pageLayout: {
    fontFamily: 'Inter, -apple-system, sans-serif',
    backgroundColor: '#f8f9fa',
  },
  heroSection: {
    height: '50vh',
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2670&auto=format&fit=crop')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: 'white',
    padding: '20px',
  },
  heroTitle: {
    fontSize: '3rem',
    fontWeight: 700,
    margin: 0,
    textShadow: '1px 1px 10px rgba(0,0,0,0.5)',
  },
  heroSubtitle: {
    fontSize: '1.2rem',
    marginTop: '10px',
    maxWidth: '600px',
  },
  section: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '60px 20px',
  },
  sectionTitle: {
    fontSize: '2.2rem',
    fontWeight: 600,
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: '40px',
  },
  featuredGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '30px',
  },
  blogCard: {
    backgroundColor: 'white',
    borderRadius: '16px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: '220px',
    objectFit: 'cover',
  },
  cardContent: {
    padding: '25px',
  },
  cardTag: {
    backgroundColor: '#e0f7fa',
    color: '#00796b',
    padding: '5px 12px',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: 600,
    display: 'inline-block',
    marginBottom: '15px',
  },
  cardTitle: {
    fontSize: '1.5rem',
    fontWeight: 600,
    margin: '0 0 10px 0',
    color: '#34495e',
  },
  cardExcerpt: {
    fontSize: '1rem',
    lineHeight: 1.6,
    color: '#555',
  },
  ideasGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '25px',
  },
  ideaCard: {
    backgroundColor: 'white',
    padding: '25px',
    borderRadius: '12px',
    textAlign: 'center',
    border: '1px solid #e0e0e0',
  },
  ideaIcon: {
    fontSize: '2.5rem',
    marginBottom: '15px',
  },
  ideaCardTitle: {
    fontSize: '1.2rem',
    margin: '0 0 10px 0',
    color: '#2E73E8',
  },
  reviewsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
  },
  reviewCard: {
    backgroundColor: '#ffffff',
    padding: '25px',
    borderRadius: '12px',
    border: '1px solid #e2e8f0',
  },
  reviewText: {
    fontStyle: 'italic',
    lineHeight: 1.7,
    color: '#333',
    marginBottom: '20px',
  },
  reviewAuthor: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  authorImage: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  authorName: {
    fontWeight: 600,
    color: '#2c3e50',
  },
  authorLocation: {
    fontSize: '0.9rem',
    color: '#718096',
  },
};

export default function BlogPage() {
  return (
    <div style={styles.pageLayout}>
      <Navbar />
      <header style={styles.heroSection}>
        <h1 style={styles.heroTitle}>Your Adventure Awaits.</h1>
        <p style={styles.heroSubtitle}>Discover India's hidden gems with MausamTrek's travel blog, your guide to the perfect weather-proof journey.</p>
      </header>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Featured Stories</h2>
        <div style={styles.featuredGrid}>
          
          <div style={styles.blogCard}>
            {/* --- NEW VERIFIED Lonavala Image Link --- */}
            <img src="https://images.unsplash.com/photo-1614082242765-7c9de_e544d2?q=80&w=2574&auto=format&fit=crop" alt="Waterfalls in Lonavala" style={styles.cardImage} />
            <div style={styles.cardContent}>
              <span style={styles.cardTag}>#monsoonmagic</span>
              <h3 style={styles.cardTitle}>Chasing Waterfalls in Lonavala</h3>
              <p style={styles.cardExcerpt}>
                The forecast showed a perfect break in the rains. We packed our bags, trusted the app, and found ourselves amidst misty, waterfall-laden hills.
              </p>
            </div>
          </div>

          <div style={styles.blogCard}>
            {/* --- NEW VERIFIED Himalayan Village Image Link --- */}
            <img src="https://www.google.com/imgres?q=himalayan%20village%20pintrest&imgurl=https%3A%2F%2Fi.pinimg.com%2F474x%2Fb7%2F7c%2Fdf%2Fb77cdfbc850b55dd2f3363bb38e31497.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fideas%2Fhimalayan-village%2F954632217814%2F&docid=-kiCfr4d4ZUmvM&tbnid=PYr0qc0lpUqgTM&vet=12ahUKEwjGjumat9yOAxV3Z_UHHfzoIYEQM3oECAwQAA..i&w=474&h=592&hcb=2&ved=2ahUKEwjGjumat9yOAxV3Z_UHHfzoIYEQM3oECAwQAA" alt="Himalayan Village" style={styles.cardImage} />
            <div style={styles.cardContent}>
              <span style={styles.cardTag}>#himalayanescape</span>
              <h3 style={styles.cardTitle}>Finding a Sun-Kissed Himalayan Village</h3>
              <p style={styles.cardExcerpt}>
                Everyone said it would be freezing, but MausamTrek pointed us to a tiny village in Himachal basking in a rare winter sun.
              </p>
            </div>
          </div>

        </div>
      </section>

      <section style={{...styles.section, backgroundColor: '#fff'}}>
        <h2 style={styles.sectionTitle}>Discover More with MausamTrek</h2>
        <div style={styles.ideasGrid}>
          <div style={styles.ideaCard}>
            <div style={styles.ideaIcon}>⛰️</div>
            <h3 style={styles.ideaCardTitle}>Plan Monsoon Treks</h3>
            <p>Use our hourly rain forecast to find the perfect dry window for your adventure in the Western Ghats.</p>
          </div>
          <div style={styles.ideaCard}>
            <div style={styles.ideaIcon}>☀️</div>
            <h3 style={styles.ideaCardTitle}>Escape the Heatwave</h3>
            <p>Our app helps you find cooler destinations with pleasant temperatures for a relaxing summer break.</p>
          </div>
          <div style={styles.ideaCard}>
            <div style={styles.ideaIcon}>❄️</div>
            <h3 style={styles.ideaCardTitle}>Track Hill Station Snowfall</h3>
            <p>Dreaming of a white winter? Track real-time snowfall predictions for places like Manali and Auli.</p>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Journeys Powered by MausamTrek</h2>
        <div style={styles.reviewsGrid}>

          <div style={styles.reviewCard}>
            <p style={styles.reviewText}>
              "MausamTrek is a game-changer! We planned a trip to Coorg, and the app's humidity forecast helped us pick the most comfortable days to explore."
            </p>
            <div style={styles.reviewAuthor}>
              <img src="https://placehold.co/100x100/EFEFEF/333?text=P" alt="Priya" style={styles.authorImage} />
              <div>
                <div style={styles.authorName}>Priya S.</div>
                <div style={styles.authorLocation}>from Bangalore</div>
              </div>
            </div>
          </div>

          <div style={styles.reviewCard}>
            <p style={styles.reviewText}>
              "I used the app to plan a last-minute bike trip to Rajasthan. The wind speed data was surprisingly accurate and crucial for our safety on the highways."
            </p>
            <div style={styles.reviewAuthor}>
              <img src="https://placehold.co/100x100/EFEFEF/333?text=R" alt="Rohan" style={styles.authorImage} />
              <div>
                <div style={styles.authorName}>Rohan K.</div>
                <div style={styles.authorLocation}>from Delhi</div>
              </div>
            </div>
          </div>

        </div>
      </section>
      <Footer />
    </div>
  );
}