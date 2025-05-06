'use client';

import React from "react";

const HeroSection = () => {
  return (
    <div
      style={{
        position: "relative",
        height: "90vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <img
        src="/satyam.gif"
        alt="Scenic travel background"
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
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 1rem",
          zIndex: 10,
        }}
      >
        <h1
          style={{
            fontSize: "2.25rem",
            fontWeight: "800",
            backgroundImage: 'linear-gradient(to right,rgb(0, 0, 0),rgb(1, 7, 90),rgb(0, 0, 0))',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Prakriti Se Jude Har Safar Mein Bharat Ka Ehsaaszz
        </h1>
        <p
          style={{
            fontSize: "1.125rem",
            color: "#000",
            marginBottom: "1.5rem",
            maxWidth: "36rem",
          }}
        >
          “Mausam ka Mizaz, MausamTrek ke Saath.”
        </p>
        <div style={{ display: "flex", gap: "1rem" }}>
          <button
            style={{
              backgroundColor: "#2563eb",
              color: "white",
              padding: "0.75rem 1.5rem",
              borderRadius: "0.5rem",
              fontWeight: "600",
              transition: "background-color 0.3s",
              cursor: "pointer",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#1d4ed8")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#2563eb")}
          >
            Check Weather
          </button>
          <button
            style={{
              backgroundColor: "white",
              color: "#2563eb",
              padding: "0.75rem 1.5rem",
              borderRadius: "0.5rem",
              fontWeight: "600",
              transition: "background-color 0.3s",
              cursor: "pointer",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#f3f4f6")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "white")}
          >
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
