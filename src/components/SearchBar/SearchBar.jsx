import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const SearchBar = ({ onSearch }) => {
  return (
    <div className="relative w-full max-w-md">
      <FaMagnifyingGlass className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      <input
        type="text"
        placeholder="Search Apps"
        onChange={(e) => onSearch(e.target.value)}
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
      />
    </div>
  );
};

export default SearchBar;
