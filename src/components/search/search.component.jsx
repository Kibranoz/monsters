import React from "react";
import "./search-box.styles.css";

export const SearchBox = ({placeholder, handleFunction}) => (
    <input
    className = ".search"
    type="search"
    placeholder={placeholder}
    onChange= {handleFunction}
  />
)