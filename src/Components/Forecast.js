import React from "react";

const Forecast = ({forecast,unit}) => {
  let forecastday=forecast.forecastday.slice(1,6);
  console.log("slice",forecastday);
  return (
    <div>
      <div className="flex items-center justify-start mt-6">
        <p className="text-white font-medium uppercase">forecast</p>
      </div>
      <hr className="my-2" />
      <div className="flex flex-row items-center justify-between text-white">
        {
          forecastday.map((day,index)=>(
            <div className="flex flex-col items-center justify-center" key={index}>
            <p className="font-light text-sm">{day.date.substring(5,10)}</p>
            <img src={day.day.condition.icon}/>
            <p className="font-medium">{unit ? (`${day.day.avgtemp_c} °C`): `${day.day.avgtemp_f} °F`}</p>
          </div>
          ))
        }
      </div>
    </div>
  );
};

export default Forecast;
