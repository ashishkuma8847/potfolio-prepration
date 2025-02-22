import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [data, setData] = useState(
    () => localStorage.getItem("activeTab") || "varient"
  );

  useEffect(() => {
    localStorage.setItem("activeTab", data);
  }, [data]);

  return (
    <>
      <div className="h-full bg-[#2c2c2c] items-center justify-center fixed flex">
        <div className="relative text-white h-[300px] flex flex-col gap-10 justify-center items-center w-[200px] bg-[#2c2c2c] font-customfontinter">
          <div
            className={`absolute left-0 w-full transition-all duration-300 text-center  
          ${
            data === "varient"
              ? "top-[-45px]"
              : data === "varient1"
              ? "top-[35px]"
              : data === "varient2"
              ? "top-[115px]"
              : data === "varient3"
              ? "top-[195px]"
              : ""
          }`}
          >
            <div className="h-full w-full bg-[#0D0D0D]">
              <div className="bg-[#2c2c2c] h-[50px] w-full rounded-br-2xl rounded-bl-2xl"></div>
            </div>
            <div className="bg-[#0D0D0D] h-[50px] w-full"></div>
            <div className="h-full w-full bg-[#0D0D0D]">
              <div className="h-[50px] bg-[#2c2c2c] w-full rounded-tr-2xl rounded-tl-2xl"></div>
            </div>
          </div>
          <Link to={"/"}>
            <button
              onClick={() => setData("varient")}
              className={`p-2 relative transition-all duration-300 ${
                data === "varient" ? "z-50 " : "bg-transparent"
              }`}
            >
              Home
            </button>
          </Link>

          <button
            onClick={() => setData("varient1")}
            className={`p-2 relative ${
              data === "varient1" ? "z-50 " : "bg-transparent"
            }`}
          >
            About
          </button>
          <button
            onClick={() => setData("varient2")}
            className={`p-2 relative ${
              data === "varient2" ? "z-50 " : "bg-transparent"
            }`}
          >
            Contact
          </button>
          <button
            onClick={() => setData("varient3")}
            className={`p-2 relative ${
              data === "varient3" ? "z-50 " : "bg-transparent"
            }`}
          >
            Other
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
