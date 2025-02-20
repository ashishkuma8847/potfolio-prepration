import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(""); 

  return (
    <div className="h-[100vh] flex justify-center items-center">
      <div className="relative text-amber-600 h-[100px] flex flex-col justify-between items-center w-[120px] bg-amber-200">
        
        <div
          className={`absolute h-[100px] w-[120px] z-10 justify-between transition-all duration-300 
          ${data === "varient" ? "top-4" : data === "varient1" ? "top-8" : data === "varient2" ? "top-12" : "top-0"}`}
        >
          <div className=""></div>
          <div className="bg-black">dfsfd</div>
          <div className=""></div>
        </div>

        <button onClick={() => setData("varient")} className={`${data === "varient" ? "bg-blue-500" : ""}`}>Home</button>
        <button onClick={() => setData("varient1")} className={`${data === "varient1" ? "bg-green-500" : ""}`}>Context</button>
        <button onClick={() => setData("varient2")} className={`${data === "varient2" ? "bg-red-500" : ""}`}>About</button>
      </div>
    </div>
  );
}

export default App;
