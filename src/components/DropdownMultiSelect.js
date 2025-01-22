import React, { useState } from "react";
import "./DropdownMultiSelect.css";

const DropdownMultiSelect = ({
  options,
  selectedValues,
  onChange,
  addNewOption,
}) => {
  const [newOption, setNewOption] = useState("");

  const handleCheckboxChange = (value) => {
    if (selectedValues.includes(value)) {
      onChange(selectedValues.filter((v) => v !== value));
    } else {
      onChange([...selectedValues, value]);
    }
  };

  const handleAddNewOption = () => {
    if (newOption && !options.includes(newOption)) {
      addNewOption(newOption);
      setNewOption("");
    }
  };

  return (
    <div className="multi-select-dropdown">
      <div className="selected-options">
        {selectedValues.length > 0 && (
          <>
            <h3 className="selected-options-heading">Selected Options</h3>
            <div className="selected-options-list">
              {selectedValues.map((option, index) => (
                <span key={index} className="selected-option">
                  {option}
                </span>
              ))}
            </div>
          </>
        )}
      </div>
      <div className="options-list">
        {options.map((option, index) => (
          <label key={index} className="checkbox-label">
            <input
              type="checkbox"
              checked={selectedValues.includes(option)}
              onChange={() => handleCheckboxChange(option)}
            />
            {option}
          </label>
        ))}
      </div>
      <div className="add-new-option">
        <input
          type="text"
          value={newOption}
          onChange={(e) => setNewOption(e.target.value)}
          placeholder="Add new item"
          className="add-option-input"
        />
        <button className="add-option-button" onClick={handleAddNewOption}>
          + Add
        </button>
      </div>
    </div>
  );
};

export default DropdownMultiSelect;
