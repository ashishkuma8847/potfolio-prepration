import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState("");

  return (
    <div className="h-[100vh] bg-black flex justify-center items-center">
      <div className="relative text-amber-600 h-[150px] flex flex-col justify-between items-center w-[120px] bg-amber-200">

        {/* Moving Box */}
        <div
          className={`absolute left-0 w-full h-[50px] z-10 transition-all duration-300 bg-white text-center p-2 
          ${data === "varient" ? "top-0 rounded-b-[4px]" : data === "varient1" ? "top-[50px]" : data === "varient2" ? "top-[100px] rounded-tl-[4px] rounded-tr-[4px]" : "top-0"}`}
        ></div>

        {/* Buttons */}
        <button onClick={() => setData("varient")} className={`p-2 m-1 transition-all duration-300 ${data === "varient" ? "bg-blue-500 z-50 text-white" : "bg-gray-200"}`}>Home</button>
        <button onClick={() => setData("varient1")} className={`p-2 m-1 ${data === "varient1" ? "bg-green-500 z-50 text-white" : "bg-gray-200"}`}>Context</button>
        <button onClick={() => setData("varient2")} className={`p-2 m-1 ${data === "varient2" ? "bg-red-500 z-50 text-white" : "bg-gray-200"}`}>About</button>
      </div>
    </div>
  );
}

export default App;
