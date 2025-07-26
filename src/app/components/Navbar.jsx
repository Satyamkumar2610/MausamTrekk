'use client';

import React from 'react';
import Link from 'next/link';
import { Home, Info, CloudSun, BookOpen, HelpCircle, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      <nav
        style={{
          backgroundColor: 'white',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          padding: '16px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontFamily: 'Arial, sans-serif',
          position: 'relative',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              width: '40px',
              height: '40px',
              backgroundColor: '#0891b2',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CloudSun color="white" size={20} />
          </div>
          <h1
            style={{
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#0891b2',
              margin: 0,
            }}
          >
            MausamTrek
          </h1>
        </div>

        <ul 
          style={{ 
            display: 'flex', 
            gap: '8px', 
            listStyle: 'none', 
            margin: 0, 
            padding: 0 
          }}
          className="desktop-menu"
        >
          <li>
            <Link
              href="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                borderRadius: '6px',
                color: '#374151',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: '500',
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#f0f9ff';
                e.target.style.color = '#0891b2';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#374151';
              }}
            >
              <Home size={16} />
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                borderRadius: '6px',
                color: '#374151',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: '500',
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#f0f9ff';
                e.target.style.color = '#0891b2';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#374151';
              }}
            >
              <Info size={16} />
              About
            </Link>
          </li>
          <li>
            <Link
              href="/weather"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                borderRadius: '6px',
                color: '#374151',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: '500',
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#f0f9ff';
                e.target.style.color = '#0891b2';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#374151';
              }}
            >
              <CloudSun size={16} />
              Weather
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                borderRadius: '6px',
                color: '#374151',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: '500',
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#f0f9ff';
                e.target.style.color = '#0891b2';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#374151';
              }}
            >
              <BookOpen size={16} />
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/help"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                borderRadius: '6px',
                color: '#374151',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: '500',
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#f0f9ff';
                e.target.style.color = '#0891b2';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#374151';
              }}
            >
              <HelpCircle size={16} />
              Help
            </Link>
          </li>
        </ul>

        <button
          onClick={handleMenuToggle}
          style={{
            display: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '8px',
            backgroundColor: 'transparent',
            border: 'none',
            borderRadius: '4px',
            color: '#374151',
            cursor: 'pointer',
          }}
          className="mobile-menu-btn"
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#f3f4f6';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = 'transparent';
          }}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {menuOpen && (
        <div>
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 10,
            }}
            onClick={closeMenu}
          />
          <div
            style={{
              position: 'absolute',
              top: '100%',
              right: '24px',
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              padding: '16px',
              zIndex: 20,
              minWidth: '180px',
              border: '1px solid #e5e7eb',
            }}
            className="mobile-menu"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <Link
                href="/"
                onClick={closeMenu}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 16px',
                  borderRadius: '6px',
                  color: '#374151',
                  textDecoration: 'none',
                  fontSize: '16px',
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#f0f9ff';
                  e.target.style.color = '#0891b2';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#374151';
                }}
              >
                <Home size={18} />
                Home
              </Link>
              <Link
                href="/about"
                onClick={closeMenu}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 16px',
                  borderRadius: '6px',
                  color: '#374151',
                  textDecoration: 'none',
                  fontSize: '16px',
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#f0f9ff';
                  e.target.style.color = '#0891b2';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#374151';
                }}
              >
                <Info size={18} />
                blog
              </Link>
              <Link
                href="/weather"
                onClick={closeMenu}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 16px',
                  borderRadius: '6px',
                  color: '#374151',
                  textDecoration: 'none',
                  fontSize: '16px',
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#f0f9ff';
                  e.target.style.color = '#0891b2';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#374151';
                }}
              >
                <CloudSun size={18} />
                Weather
              </Link>
              <Link
                href="/blog"
                onClick={closeMenu}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 16px',
                  borderRadius: '6px',
                  color: '#374151',
                  textDecoration: 'none',
                  fontSize: '16px',
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#f0f9ff';
                  e.target.style.color = '#0891b2';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#374151';
                }}
              >
                <BookOpen size={18} />
                Blog
              </Link>
              <Link
                href="/help"
                onClick={closeMenu}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 16px',
                  borderRadius: '6px',
                  color: '#374151',
                  textDecoration: 'none',
                  fontSize: '16px',
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#f0f9ff';
                  e.target.style.color = '#0891b2';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#374151';
                }}
              >
                <HelpCircle size={18} />
                Help
              </Link>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
        }
      `}</style>
    </div>
  );
}