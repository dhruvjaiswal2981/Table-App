import React from "react";
import "./DropdownSingleSelect.css";

const DropdownSingleSelect = ({ options, value, onChange }) => {
  return (
    <div className="single-select-dropdown">
      <select
        className="single-select-dropdown-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Select Option</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownSingleSelect;
