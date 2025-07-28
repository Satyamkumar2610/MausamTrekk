'use client';
import Link from 'next/link';
import React from "react";

const HeroSection = () => {
  return (
    <div
      style={{
        position: "relative",
        height: "90vh",
        width: "100%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src="https://cdn.pixabay.com/photo/2019/08/23/01/28/mountain-4424657_1280.jpg"
        alt="Beautiful mountain landscape"
        style={{
          position: "absolute",
          inset: 0,
          height: "100%",
          width: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      />
      
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(15, 23, 42, 0.4) 0%, rgba(30, 41, 59, 0.6) 40%, rgba(15, 23, 42, 0.8) 100%)",
          zIndex: 1,
        }}
      />
      
      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          padding: "0 2rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "3.5rem",
            fontWeight: "700",
            lineHeight: "1.4",
            marginBottom: "1.5rem",
            backgroundImage: 'linear-gradient(135deg, #ffffff 0%, #f1f5f9 30%, #e2e8f0 70%, #ffffff 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            textShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
            letterSpacing: "-0.02em",
            filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))",
          }}
        >
          प्रकृति से जुड़े हर सफर में भारत का एहसास
        </h1>
        
        <p
          style={{
            fontSize: "1.5rem",
            color: "#f8fafc",
            marginBottom: "3rem",
            fontWeight: "400",
            letterSpacing: "0.025em",
            textShadow: "0 2px 6px rgba(0, 0, 0, 0.7)",
            fontStyle: "italic",
            opacity: "0.95",
          }}
        >
          "मौसम का मिज़ाज, MausamTrek के साथ।"
        </p>
        
        <div 
          style={{ 
            display: "flex", 
            gap: "1.5rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link href="/weather">
          <button
            style={{
              background: "linear-gradient(135deg, #0f766e 0%, #0d9488 50%, #14b8a6 100%)",
              color: "white",
              padding: "1rem 2.5rem",
              borderRadius: "0.75rem",
              fontWeight: "600",
              fontSize: "1.1rem",
              transition: "all 0.3s ease",
              cursor: "pointer",
              border: "none",
              boxShadow: "0 4px 15px rgba(20, 184, 166, 0.4)",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
            onMouseOver={(e) => {
              e.target.style.background = "linear-gradient(135deg, #0d9488 0%, #14b8a6 50%, #2dd4bf 100%)";
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 6px 20px rgba(20, 184, 166, 0.6)";
            }}
            onMouseOut={(e) => {
              e.target.style.background = "linear-gradient(135deg, #0f766e 0%, #0d9488 50%, #14b8a6 100%)";
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 4px 15px rgba(20, 184, 166, 0.4)";
            }}
          >
            Check Weather
          </button>
          </Link>
          <Link href="/Blog">
          <button
            style={{
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%)",
              color: "white",
              padding: "1rem 2.5rem",
              borderRadius: "0.75rem",
              fontWeight: "600",
              fontSize: "1.1rem",
              transition: "all 0.3s ease",
              cursor: "pointer",
              border: "2px solid rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(10px)",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
            onMouseOver={(e) => {
              e.target.style.background = "linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.2) 100%)";
              e.target.style.transform = "translateY(-2px)";
              e.target.style.borderColor = "rgba(255, 255, 255, 0.5)";
            }}
            onMouseOut={(e) => {
              e.target.style.background = "linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%)";
              e.target.style.transform = "translateY(0)";
              e.target.style.borderColor = "rgba(255, 255, 255, 0.3)";
            }}
          >
            Explore
          </button>
          </Link>
        </div>
      </div>
      
      <style jsx>{`
      `}</style>
    </div>
  );
};

export default HeroSection;