import React, { useState } from 'react'
import Input from './components/Input'
import { CardContent, Cards } from './components/Cards'
import Button from './components/Button'
import {Sun, CloudRain, Snowflake} from 'lucide-react'


const API_KEY = 'eeff8479a5b532c1088e026a8abba83b'

export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) throw new Error("City not found");
      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    }
    setLoading(false);
  };

  const getWeatherIcon = (main) => {
    switch (main) {
      case "Clear":
        return <Sun className="text-yellow-400 w-10 h-10 ml-35" />;
      case "Rain":
        return <CloudRain className="text-blue-400 w-10 h-10 ml-35" />;
      case "Snow":
        return <Snowflake className="text-blue-200 w-10 h-10 ml-35" />;
      default:
        return <CloudRain className="text-blue-800 w-10 h-10 ml-35" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-10 to-blue-100 flex items-center justify-center p-4">
      <Cards className="h-full max-w-md shadow-xl/20 rounded-2xl bg-gradient-to-b from-blue-600 to-blue-300 ">
        <CardContent>
          <h1 className="text-3xl text-white font-bold mb-8 text-center text-blue-700">
            Weather App
          </h1>
          <div className="flex gap-2 mb-8">
            <Input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter city name"
              className="flex-1"
            />
            <Button onClick={fetchWeather} disabled={loading}>
              {loading ? "Loading..." : "Search"}
            </Button>
          </div>
          {error && <p className="text-red-500 text-center font-semibold">{error}</p>}
          {weather && (
            <div className="text-center mt-6">
              {getWeatherIcon(weather.weather[0].main)}
              <h2 className="text-2xl font-semibold mt-4 text-white">
                {weather.name}, {weather.sys.country}
              </h2>
              <p className="text-lg text-gray-100 font-bold mt-3">
                {weather.weather[0].main} - {weather.weather[0].description}
              </p>
              <p className="text-4xl font-bold text-white mt-4">
                {Math.round(weather.main.temp)}&deg;C
              </p>
            </div>
          )}
        </CardContent>
      </Cards>
    </div>
  );
}

