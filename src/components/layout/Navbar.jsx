import React from "react";
// import TabBar from '../ui/TabBar'
import { BellIcon, GridIcon, PinIcon } from "../../svg";
import Search from "../ui/Search";
import ThemeToggle from "../ui/ThemeToggle";

const Navbar = ({weather}) => {
  return (
    <div className="flex items-center justify-between h-[80px] px-4">
      <div className="nav-left flex items-center space-x-4">
        <GridIcon />
        <BellIcon />
        <h2>{weather.name}</h2>

        <PinIcon />
      </div>
       <div className="nav-center flex justify-center mx-4">
        <Search />
      </div>
      <div className="nav-right flex items-center space-x-4">
        <ThemeToggle />
      </div>
      {/* <TabBar/> */}
    </div>
  );
};

export default Navbar;
