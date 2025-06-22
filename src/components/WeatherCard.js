import React from 'react';
import './WeatherCard.css'; // Assuming you have a CSS file for styling

function WeatherCard({ data }) {
  const { name, sys, main, weather, wind } = data;

  return (
    <div className="weather-card">
      <h2>{name}, {sys.country}</h2>
      <img
        src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
        alt="weather icon"
      />
      <p>{weather[0].main} - {weather[0].description}</p>
      <h3>🌡️ {main.temp.toFixed(2)}°C</h3>
      <p>💧 Humidity: {main.humidity}%</p>
      <p>🌬️ Wind: {wind.speed} m/s</p>
      <p>💟 Feels Like: {main.feels_like}°C</p>
    </div>
  );
}

export default WeatherCard;
