import React, { useState } from "react";

import { Link } from "react-router-dom";

const TabBar = () => {
  const [activeTab, setActiveTab] = useState("SevenDays");
  return (
    <div className="">
      <ul className="flex gap-4 w-full text-amber-50 text-xl">
        <li>
          <Link
            onClick={() => setActiveTab("Today")}
            to="/todayweather"
            className={
              activeTab === "Today" ? "text-[#FFFF]" : "text-[#818085]"
            }
          >
            Today
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setActiveTab("Tomorrow")}
            to="/tomorrowweather"
            className={
              activeTab === "Tomorrow" ? "text-[#FFFF]" : "text-[#818085]"
            }
          >
            Tomorrow
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setActiveTab("SevenDays")}
            to="/"
            className={
              activeTab === "SevenDays" ? "text-[#FFFF]" : "text-[#818085]"
            }
          >
            Seven Days
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default TabBar;
