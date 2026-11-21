import React from "react";
import { BellIcon, GridIcon, PinIcon } from "../../svg";
import Search from "../ui/Search";
import ThemeToggle from "../ui/ThemeToggle";

const Navbar = ({ weather, getWeather }) => {
  return (
    <div className="flex items-center justify-between h-[80px] px-4">
      <div className="nav-left flex items-center space-x-4">
        <div className="p-[10px] rounded-full bg-[#1E1E1E] flex items-center justify-center">
          <GridIcon />
        </div>
        <div className="p-[10px] rounded-full bg-[#1E1E1E] flex items-center justify-center">
          <BellIcon />
        </div>
        <PinIcon />
        <h2>{weather.name}</h2>
      </div>
      <div className="nav-center flex justify-center mx-4">
        <Search getWeather={getWeather} />
      </div>
      <div className="nav-right flex items-center space-x-4">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
