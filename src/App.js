import axios from "axios";
import "./App.css";
import Buttons from "./Components/Buttons";
import Forecast from "./Components/Forecast";
import Input from "./Components/Input";
import Location from "./Components/Location";
import Temp from "./Components/Temp";
import { useEffect, useState } from "react";

function App() {
  const [query, setQuery] = useState({ s: "bihar" });
  const [celsius, setCelsius] = useState(true);
  const [weather, setWeather] = useState(null);

  const API_KEY = "1820efad953d47c49bd164110230304";
  const BASE_URL = "http://api.weatherapi.com/v1/forecast.json";

 

  useEffect(() => {

    function getFormattedWeatherData() {
      axios
        .get(`${BASE_URL}?key=${API_KEY}&q=${query.s}&days=10&aqi=no&alerts=no`)
        .then((res) => {
          setWeather(res.data);
          console.log("hi", weather);
          console.log("bye", res.data);
        });
    }
    getFormattedWeatherData();
  }, [query, celsius]);
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <Buttons setQuery={setQuery} />
      <Input setQuery={setQuery}/>
      {weather && (
        <div>
          <Location location={weather.location} />
          <Temp current={weather.current} forecast={weather.forecast}/>
          <Forecast forecast={weather.forecast} />
        </div>
      )}
    </div>
  );
}

export default App;
