import "./App.css";
import Buttons from "./Components/Buttons";
import Forecast from "./Components/Forecast";
import Input from "./Components/Input";
import Location from "./Components/Location";
import Temp from "./Components/Temp";
import getWeatherData from "./api/weatherapi";

function App() {

  const fetchData=async ()=>{
    const data=await getWeatherData({q:'varanasi'});
    console.log(data);
  }

  fetchData();



  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <Buttons/>
      <Input/>
      <Location/>
      <Temp/>
      <Forecast/>

    </div>
  );
}

export default App;
