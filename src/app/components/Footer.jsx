import React from 'react';

// Simple inline styles for the footer
const footerStyle = {
  backgroundColor: '#2D3748', // Dark gray background
  color: '#E2E8F0',          // Light gray text
  textAlign: 'center',
  padding: '20px',
  marginTop: 'auto'          // Pushes footer to the bottom if content is short
};

const linkStyle = {
  color: '#4299E1',          // Blue link color
  textDecoration: 'none',
  margin: '0 10px'
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={footerStyle}>
      <p>&copy; {currentYear} MausamTrek. All Rights Reserved.</p>
      <div>
        <a href="#" style={linkStyle}>Privacy Policy</a>
        |
        <a href="#" style={linkStyle}>Terms of Service</a>
      </div>
    </footer>
  );
}