import React from "react";
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
const Temp = ({current,forecast,unit}) => {
  let data=forecast.forecastday[0];
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>{current.condition.text}</p>
      </div>
      <div className="flex flex-row items-center justify-between text-white py-3">
        <img src={current.condition.icon}></img>
        <p className="text-5xl">{unit ? (`${current.temp_c} °C`): `${current.temp_f} °F`}</p>
        <div className="flex flex-col space-y-2">
          <div
            className="flex font-light text-sm items-center
                justify-center"
          >
            <UilTemperature size={18} className="mr-1" />
            Feel like:
            <span className="font-medium ml-1">{current.feelslike_c}</span>
          </div>
          <div
            className="flex font-light text-sm items-center
                justify-center"
          >
            <UilTear size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">{current.humidity}</span>
          </div>
          <div
            className="flex font-light text-sm items-center
                justify-center"
          >
            <UilWind size={18} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">{current.wind_kph}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-4 text-white text-sm py-2">
        <UilSun/>
        <p className="font-light">
          Rise:<span className="font-medium ml-1">{data.astro.sunrise}</span>
        </p>
        <UilSun />
        <p className="font-light">
          Set:<span className="font-medium ml-1"> {data.astro.sunset}</span>
        </p>
        <UilSun />
        <p className="font-light">
          High:<span className="font-medium ml-1"> {data.day.maxtemp_c}</span>
        </p>
        <UilSun />
        <p className="font-light">
          Low:<span className="font-medium ml-1"> {data.day.mintemp_c}</span>
        </p>
      </div>

      
    </div>
  );
};

export default Temp;
