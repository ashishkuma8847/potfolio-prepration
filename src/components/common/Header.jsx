import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [data, setData] = useState(
    () => localStorage.getItem("activeTab") || "varient"
  );

  useEffect(() => {
    localStorage.setItem("activeTab", data);
  }, [data]);

  const jsonData = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "About",
      to: "/",
    },
    {
      name: "Contact",
      to: "/",
    },
    {
      name: "Other",
      to: "/",
    },
  ];
  function handleOver(e) {
    e.preventDefault();
    document.querySelectorAll(".nav-link").forEach((nav) => {
      const pre = nav.previousElementSibling;
      const nex = nav.nextElementSibling;
      const cornt = nav;
      cornt.style.backgroundColor = "#2c2c2c";
      if (pre) {
        pre.style.borderBottomRightRadius = ""; // Reset previous element
      }
      if (nex) {
        nex.style.borderTopRightRadius = ""; // Reset next element
      }
    });
    const pre = e.currentTarget.previousElementSibling;
    const nex = e.currentTarget.nextElementSibling;
    const cornt = e.currentTarget;

    cornt.style.backgroundColor = "#0D0D0D";
    if (pre) {
      pre.style.borderBottomRightRadius = "10px";
    }
    if (nex) {
      nex.style.borderTopRightRadius = "10px";
    }
  }
  function handleLeave(e) {
    const pre = e.currentTarget.previousElementSibling;
    const nex = e.currentTarget.nextElementSibling;

    if (pre) {
      pre.style.borderBottomRightRadius = ""; // Reset to default
    }
    if (nex) {
      nex.style.borderTopRightRadius = ""; // Reset to default
    }
  }

  return (
    <>
      <div className=" bg-[#2c2c2c] items-center justify-center   flex">
        <div className="relative text-white   flex flex-col justify-center items-center w-[200px] bg-[#0D0D0D]  font-customfontinter">
          <div className="bg-[#2c2c2c] w-full h-3.5"></div>
          {jsonData.map((item, index) => (
            <NavLink
              to={item.to}
              onClick={handleOver}
              // onMouseLeave={handleLeave}
              key={index}
              className="nav-link py-4 text-xl transition-all duration-200 ease-in  w-full text-center bg-[#2c2c2c]"
            >
              {item.name}
            </NavLink>
          ))}
          <div className="bg-[#2c2c2c] w-full h-3.5"></div>
        </div>
      </div>
    </>
  );
};

export default Header;
