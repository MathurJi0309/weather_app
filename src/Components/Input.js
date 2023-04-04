import React, { useState } from "react";
import { UilSearchAlt } from "@iconscout/react-unicons";
import { UilMapPin } from "@iconscout/react-unicons";

const Input = ({setQuery}) => {
  const [city,setCity]=useState("ij");

  const handleclick=()=>{
    if(city !='') setQuery({s:city});
  }
  return (
    <div className="flex felx-row justify-center my-6 space-x-8">
      <div className="flex flex-row w=3/4 items-center justify-center space-x-4">
        <input        
        value={city}
        onChange={(e)=>setCity(e.currentTarget.value)}
          type="text"
          placeholder="Search your city....."
          className="text-xl font-light p-2 w-full shadow-xl capitalize placeholder:lowercase h-8"
        />
        <UilSearchAlt size={25} className='text-white cursor-pointer transition ease-out hover:scale-125'onClick={handleclick()}/>
        <UilMapPin size={25} className='text-white cursor-pointer transition ease-out hover:scale-125'/>
      </div>
      <div className="flex flex-row w=1/4 items-center justify-center space-x-3">
        <button name="metric"  className="text-xl text-white font light transition ease-out hover:scale-125"   >°C</button>
        <button name="imperial" className="text-xl text-white font light transition ease-out hover:scale-125">°F</button>


      </div>
    </div>
  );
};

export default Input;
