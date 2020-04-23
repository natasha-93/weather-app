import React, { useEffect, useState } from "react";
import City from "./City";

function App() {
  const [search, setSearch] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [formData, setFormData] = useState({
    city: "",
  });
  useEffect(() => {
    if (search === "") return;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setWeatherData(data);
      });
  }, [search]);

  return (
    <div className="app">
      <h1>Weather App</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSearch(formData.city);
          setFormData({ city: "" });
        }}
      >
        <input
          value={formData.city}
          onChange={(e) => {
            setFormData({ city: e.target.value });
          }}
        />
        <button>Search</button>
      </form>
      {weatherData != null && <City {...weatherData} />}
    </div>
  );
}

export default App;
