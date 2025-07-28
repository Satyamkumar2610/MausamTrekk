"use client";
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Search, MapPin, Wind, Droplets } from 'lucide-react';
import Footer from '../components/Footer';

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
    setCurrentWeather(null);
    setForecast([]);

    try {
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
      const weatherResponse = await fetch(weatherUrl);
      if (!weatherResponse.ok) throw new Error("City not found. Please try another.");
      const weatherData = await weatherResponse.json();

      const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${apiKey}`;
      const forecastResponse = await fetch(forecastUrl);
      const forecastData = await forecastResponse.json();

      const dailyForecast = forecastData.list.filter(item => item.dt_txt.includes("12:00:00"));

      setCurrentWeather(weatherData);
      setForecast(dailyForecast);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather("Sonipat");
  }, []);

  const handleSearch = () => fetchWeather(city);
  const formatDate = (dateStr) => new Date(dateStr).toLocaleDateString("en-IN", { weekday: 'short' });
  const iconUrl = (icon) => `https://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div style={styles.pageWrapper}>
      <Navbar />
      <main style={styles.mainContent}>
        <div style={styles.weatherCard}>
          <div style={styles.searchBar}>
            <MapPin size={20} color="#6b7280" />
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="Enter a city name"
              style={styles.searchInput}
            />
            <button onClick={handleSearch} style={styles.searchButton}>
              <Search size={20} />
            </button>
          </div>

          {loading && <p style={styles.statusMessage}>Fetching weather data...</p>}
          {error && <p style={{...styles.statusMessage, ...styles.errorMessage}}>{error}</p>}

          {!loading && !error && currentWeather && (
            <>
              <div style={styles.currentWeather}>
                <h1 style={styles.cityName}>{currentWeather.name}, {currentWeather.sys.country}</h1>
                <div style={styles.currentWeatherDetails}>
                  <img src={iconUrl(currentWeather.weather[0].icon)} alt="weather icon" style={styles.currentWeatherIcon}/>
                  <div>
                    <p style={styles.currentTemp}>{Math.round(currentWeather.main.temp)}°C</p>
                    <p style={styles.weatherDescription}>{currentWeather.weather[0].description}</p>
                  </div>
                </div>
                <div style={styles.extraDetails}>
                    <div style={styles.detailItem}>
                        <Wind size={20} color="#34495e" />
                        <div>
                            <p style={styles.detailValue}>{currentWeather.wind.speed} m/s</p>
                            <p style={styles.detailLabel}>Wind</p>
                        </div>
                    </div>
                    <div style={styles.detailItem}>
                        <Droplets size={20} color="#34495e" />
                        <div>
                            <p style={styles.detailValue}>{currentWeather.main.humidity}%</p>
                            <p style={styles.detailLabel}>Humidity</p>
                        </div>
                    </div>
                </div>
              </div>

              <div style={styles.forecastSection}>
                <h3 style={styles.forecastTitle}>5-Day Forecast</h3>
                <div style={styles.forecastGrid}>
                  {forecast.slice(0, 5).map((day) => (
                    <div key={day.dt} style={styles.forecastDay}>
                      <p style={styles.forecastDate}>{formatDate(day.dt_txt)}</p>
                      <img src={iconUrl(day.weather[0].icon)} alt="forecast icon" style={styles.forecastIcon}/>
                      <p style={styles.forecastTemp}>{Math.round(day.main.temp)}°C</p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
        
      </main>
      <Footer />
    
      
    </div>
  );
}


const styles = {
    pageWrapper: {
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        backgroundColor: '#e2e8f0',
    },
    mainContent: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        minHeight: 'calc(100vh - 70px)', // Adjust based on Navbar height
        padding: '2rem',
        boxSizing: 'border-box',
        backgroundImage: "url('https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?q=80&w=2535&auto=format&fit=crop')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    weatherCard: {
        background: 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(14px)',
        padding: '2rem',
        borderRadius: '1.5rem',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
        width: '100%',
        maxWidth: '500px',
        border: '1px solid rgba(255, 255, 255, 0.2)',
    },
    searchBar: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        marginBottom: '1.5rem',
        backgroundColor: '#fff',
        borderRadius: '1rem',
        padding: '0.5rem 0.5rem 0.5rem 1rem',
        boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
    },
    searchInput: {
        flexGrow: 1,
        border: 'none',
        outline: 'none',
        fontSize: '1rem',
        backgroundColor: 'transparent',
    },
    searchButton: {
        padding: '0.75rem',
        backgroundColor: '#2980b9',
        color: 'white',
        border: 'none',
        borderRadius: '0.75rem',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    statusMessage: {
        textAlign: 'center',
        color: '#34495e',
        padding: '1rem',
    },
    errorMessage: {
        color: '#c0392b',
        backgroundColor: 'rgba(231, 76, 60, 0.1)',
        borderRadius: '0.5rem',
    },
    currentWeather: {
        textAlign: 'center',
        borderBottom: '1px solid rgba(0,0,0,0.1)',
        paddingBottom: '1.5rem',
    },
    cityName: {
        fontSize: '2rem',
        fontWeight: '600',
        color: '#2c3e50',
        margin: '0 0 1rem 0',
    },
    currentWeatherDetails: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
    },
    currentWeatherIcon: {
        width: '100px',
        height: '100px',
    },
    currentTemp: {
        fontSize: '3.5rem',
        fontWeight: 'bold',
        color: '#2c3e50',
        margin: 0,
    },
    weatherDescription: {
        textTransform: 'capitalize',
        color: '#34495e',
        margin: '0',
        fontWeight: '500',
    },
    extraDetails: {
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: '1.5rem',
    },
    detailItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
    },
    detailValue: {
        margin: 0,
        fontWeight: 'bold',
        color: '#2c3e50',
    },
    detailLabel: {
        margin: 0,
        fontSize: '0.8rem',
        color: '#34495e',
    },
    forecastSection: {
        marginTop: '1.5rem',
    },
    forecastTitle: {
        fontSize: '1.2rem',
        fontWeight: '600',
        color: '#2c3e50',
        marginBottom: '1rem',
    },
    forecastGrid: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: '0.75rem',
    },
    forecastDay: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        padding: '1rem 0.5rem',
        borderRadius: '1rem',
        border: '1px solid rgba(0,0,0,0.05)',
        textAlign: 'center',
        flex: 1,
    },
    forecastDate: {
        margin: '0 0 0.5rem 0',
        fontWeight: '600',
        fontSize: '0.9rem',
        color: '#34495e',
    },
    forecastIcon: {
        width: '50px',
        height: '50px',
        margin: '0 auto',
    },
    forecastTemp: {
        margin: '0.5rem 0 0 0',
        fontSize: '1.1rem',
        fontWeight: 'bold',
        color: '#2c3e50',
    }
};
