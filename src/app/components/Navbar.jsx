'use client';

import React from 'react';
import Link from 'next/link';
import { Home, Info, CloudSun, BookOpen, HelpCircle } from 'lucide-react';

export default function Navbar() {
  function HoverLink() {
    const [isHovered, setIsHovered] = React.useState(false);

    const linkStyle = {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.5rem 1rem',
      borderRadius: '0.375rem',
      color: isHovered ? '#1d4ed8' : '#374151',
      backgroundColor: isHovered ? '#dbeafe' : 'transparent',
      textDecoration: 'none',
      transition: 'background-color 0.2s, color 0.2s',
      cursor: 'pointer',
    };

    return null;
  }

  return (
    <nav
      style={{
        backgroundColor: 'white',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        padding: '1rem 1.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: '1.5rem',
          fontWeight: '700',
          color: '#2563eb',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <img src="/logoSatyam.svg" style={{ width: '1.5rem', height: '1.5rem', color: '#color' }} />
        MausamTrek
      </h1>

      <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', margin: 0, padding: 0 }}>
        {[
          { href: '/', icon: <Home style={{ width: '1.25rem', height: '1.25rem' }} />, label: 'Home' },
          { href: '/about', icon: <Info style={{ width: '1.25rem', height: '1.25rem' }} />, label: 'About' },
          { href: '/weather', icon: <CloudSun style={{ width: '1.25rem', height: '1.25rem' }} />, label: 'Weather' },
          { href: '/blog', icon: <BookOpen style={{ width: '1.25rem', height: '1.25rem' }} />, label: 'Blog' },
          { href: '/contact', icon: <HelpCircle style={{ width: '1.25rem', height: '1.25rem' }} />, label: 'Help' },
        ].map(({ href, icon, label }) => (
          <li key={href} style={{ position: 'relative' }}>
            <Link
              href={href}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1rem',
                borderRadius: '0.375rem',
                color: '#374151',
                textDecoration: 'none',
                transition: 'background-color 0.2s, color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#dbeafe')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              {icon} {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
