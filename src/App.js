import "./App.css";
import Buttons from "./Components/Buttons";
import Input from "./Components/Input";
import Location from "./Components/Location";
import Temp from "./Components/Temp";

function App() {
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <Buttons/>
      <Input/>
      <Location/>
      <Temp/>

    </div>
  );
}

export default App;
