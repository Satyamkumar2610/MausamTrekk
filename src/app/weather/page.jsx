"use client";

import Navbar from '../components/Navbar';
import React, { useState, useEffect } from 'react';

const AppStyles = () => (
  <style jsx global>{`
    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      background-color: #f7fafc;
    }

    .main-content {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: calc(100vh - 70px);
      padding: 20px;
      box-sizing: border-box;
      background: linear-gradient(to right, #363795, #005C97);
    }

    .mausam-container {
      background: #ffffff;
      padding: 30px;
      border-radius: 20px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      width: 100%;
      max-width: 480px;
      text-align: center;
    }

    .mausam-container h1 {
      color: #1A202C;
      margin: 0;
      font-size: 2rem;
    }

    .mausam-container .greeting {
      color: #718096;
      margin-bottom: 25px;
      font-size: 1rem;
    }

    .search-bar {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 30px;
    }

    .search-bar input {
      flex-grow: 1;
      padding: 12px 18px;
      border: 1px solid #CBD5E0;
      border-radius: 12px;
      font-size: 1rem;
    }

    .search-bar button {
      padding: 12px 22px;
      background-color: #3182CE;
      color: white;
      border: none;
      border-radius: 12px;
      cursor: pointer;
      font-size: 1rem;
      font-weight: 500;
    }

    .status-message {
      font-weight: 500;
      padding: 12px;
      border-radius: 10px;
    }

    .error {
      color: #D8000C;
      background-color: #FFD2D2;
    }
    
    .current-weather {
      text-align: left;
      margin-top: 20px;
      padding-top: 20px;
      border-top: 1px solid #E2E8F0;
    }
    
    .current-weather h2 {
      font-size: 1.8rem;
      text-align: center;
      margin-bottom: 15px;
    }

    .weather-details {
      display: flex;
      align-items: center;
      gap: 20px;
    }

    .weather-info-left {
      text-transform: capitalize;
      font-weight: 500;
    }

    .weather-info-right p {
      margin: 8px 0;
    }
    
    .forecast-section {
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #E2E8F0;
    }
    
    .forecast-section h3 {
      text-align: left;
      font-size: 1.1rem;
      margin-bottom: 15px;
    }

    .forecast-grid {
      display: flex;
      justify-content: space-between;
      gap: 10px;
    }

    .forecast-day {
      background-color: #F7FAFC;
      padding: 10px;
      border-radius: 12px;
      border: 1px solid #E2E8F0;
      text-align: center;
      flex-grow: 1;
    }
    
    .forecast-day .temp {
      font-size: 1.1rem;
      font-weight: bold;
    }
  `}</style>
);

export default function WeatherPage() {
  const [city, setCity] = useState("Sonipat");
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const apiKey = "f4d21ac795ef9e21ec3bfb0d930816ff";

  const fetchWeather = async (location) => {
    if (!location) return;
    setLoading(true);
    setError('');

    try {
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
      const weatherResponse = await fetch(weatherUrl);
      if (!weatherResponse.ok) throw new Error("City not found, try another.");
      const weatherData = await weatherResponse.json();

      const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${apiKey}`;
      const forecastResponse = await fetch(forecastUrl);
      const forecastData = await forecastResponse.json();

      const dailyForecast = forecastData.list.filter(item => item.dt_txt.includes("12:00:00"));

      setCurrentWeather(weatherData);
      setForecast(dailyForecast);
    } catch (err) {
      setError(err.message);
      setCurrentWeather(null);
      setForecast([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather("Sonipat");
  }, []);

  const handleSearch = () => fetchWeather(city);
  const formatDate = (dateStr) => new Date(dateStr).toLocaleDateString("en-IN", { weekday: 'short', day: 'numeric' });
  const iconUrl = (icon) => `https://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div>
      <AppStyles />
      <Navbar />
      <main className="main-content">
        <div className="mausam-container">
          <h1>Mausam Darshan</h1>
          <p className="greeting">नमस्ते! Let's check the weather.</p>

          <div className="search-bar">
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="Enter a city name"
            />
            <button onClick={handleSearch}>Search</button>
          </div>

          {loading && <p className="status-message">Fetching weather...</p>}
          {error && <p className="status-message error">{error}</p>}

          {!loading && !error && currentWeather && (
            <>
              <div className="current-weather">
                <h2>{currentWeather.name}, {currentWeather.sys.country}</h2>
                <div className="weather-details">
                  <div className="weather-info-left">
                    <img src={iconUrl(currentWeather.weather[0].icon)} alt="" style={{width: '80px', height: '80px'}}/>
                    {currentWeather.weather[0].description}
                  </div>
                  <div className="weather-info-right">
                    <p><strong>Temperature:</strong> {currentWeather.main.temp}°C</p>
                    <p><strong>Feels Like:</strong> {currentWeather.main.feels_like}°C</p>
                    <p><strong>Humidity:</strong> {currentWeather.main.humidity}%</p>
                  </div>
                </div>
              </div>

              <div className="forecast-section">
                <h3>5-Day Forecast</h3>
                <div className="forecast-grid">
                  {forecast.slice(0, 5).map((day) => (
                    <div key={day.dt} className="forecast-day">
                      <p>{formatDate(day.dt_txt)}</p>
                      <img src={iconUrl(day.weather[0].icon)} alt="" style={{width: '50px', height: '50px'}}/>
                      <p className="temp">{Math.round(day.main.temp)}°</p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}