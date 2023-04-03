import React from "react";
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
const Temp = () => {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>Cloudy or whatever</p>
      </div>
      <div className="flex flex-row items-center justify-between text-white py-3">
        <img></img>
        <p className="text-5xl">34°</p>
        <div className="flex flex-col space-y-2">
          <div
            className="flex font-light text-sm items-center
                justify-center"
          >
            <UilTemperature size={18} className="mr-1" />
            Real Fell:
            <span className="font-medium ml-1">32°</span>
          </div>
          <div
            className="flex font-light text-sm items-center
                justify-center"
          >
            <UilTear size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">70%</span>
          </div>
          <div
            className="flex font-light text-sm items-center
                justify-center"
          >
            <UilWind size={18} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">11 kmph</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-4 text-white text-sm py-2">
        <UilSun/>
        <p className="font-light">
          Rise:<span className="font-medium ml-1"> 06:45 AM</span>
        </p>
        <UilSun />
        <p className="font-light">
          Set:<span className="font-medium ml-1"> 07:35 PM</span>
        </p>
        <UilSun />
        <p className="font-light">
          High:<span className="font-medium ml-1"> 45°</span>
        </p>
        <UilSun />
        <p className="font-light">
          Low:<span className="font-medium ml-1"> 40°</span>
        </p>
      </div>

      
    </div>
  );
};

export default Temp;
