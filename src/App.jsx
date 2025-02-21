import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState("");

  return (
    <>
   <div className="">
    <div className=" h-full w-full bg-[#eaded0] fixed  flex  ">
      <div className="relative text-black  h-full flex flex-col gap-10 justify-center items-center w-[200px] bg-[#f8ebe0] font-customfontinter">

        <div
          className={`absolute left-0 w-full  transition-all duration-300  text-center  
          ${data === "varient" ? "top-[270px] " : data === "varient1" ? "top-[350px]" : data === "varient2" ? "top-[430px] " : data === "varient3"? "top-[510px]" : "top-[270px]"}`}
        >
          <div className="h-full w-full bg-[#eaded0] ">
            <div className="bg-[#f8ebe0] h-[50px] w-full rounded-br-2xl rounded-bl-2xl "></div>
          </div>
          <div className="bg-[#eaded0] h-[50px]  w-full "></div>
          <div className="h-full w-full bg-[#eaded0] ">
          <div className="h-[50px] bg-[#f8ebe0]  w-full rounded-tr-2xl rounded-tl-2xl "></div>

          </div>
        </div>

        <button onClick={() => setData("varient")} className={`p-2 relative transition-all duration-300 ${data === "varient" ? " z-50 text-black" : "bg-transparent"}`}>Home</button>
        <button onClick={() => setData("varient1")} className={`p-2 relative ${data === "varient1" ? " z-50 text-black" : "bg-transparent"}`}>About</button> 
        <button onClick={() => setData("varient2")} className={`p-2 relative ${data === "varient2" ? " z-50 text-black" : "bg-transparent"}`}>Contect</button>
        <button onClick={() => setData("varient3")} className={`p-2 relative ${data === "varient2" ? " z-50 text-black" : "bg-transparent"}`}>Other</button>
       
        
      </div></div>
    </div> </>
  );
}

export default App;
