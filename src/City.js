import React from "react";

export default function City({ main, weather, name }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>
        Temperature: {main.temp}C (Feels like: {main.feels_like}C)
      </p>
      <img src={`http://openweathermap.org/img/w/${weather[0].icon}.png`} />
    </div>
  );
}
