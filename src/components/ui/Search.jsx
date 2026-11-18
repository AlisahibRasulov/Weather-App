import React from "react";
import { SearchIcon } from "../../svg";

const Search = () => {
  return (
    <div className="relative">
      <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#EDEDED]" />
      <input
        type="text"
        placeholder="Search City"
        className="w-[492px] h-[46px] px-16 py-2 rounded-lg bg-[#1E1E1E] text-[#EDEDED] placeholder:text-[#EDEDED] placeholder:font-thin font-thin border border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default Search;
