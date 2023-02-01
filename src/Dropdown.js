import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";

function DropdownButton(props) {
  return (
    <button
      className="text-left rounded w-52 h-12 mt-2  p-3 flex justify-between bg-sky-300 hover:bg-sky-500"
      onClick={props.onClick}
      onMouseOver={props.onMouseOver}
    >
      {props.selectedOption}
      <AiFillCaretDown className="mt-1" />
    </button>
  );
}

function OptionsList(props) {
  return (
    <div className="mt-2">
      {props.options.map((option) => (
        <div
          key={option.value}
          className="p-4 bg-sky-100 shadow-md hover:bg-slate-400 cursor-pointer"
          onClick={() => {
            props.setSelectedOption(option.value);
            props.setShowOptions(false);
          }}
        >
          {option.label}
        </div>
      ))}
    </div>
  );
}

function Dropdown() {
  const [selectedOption, setSelectedOption] = useState("Select");
  const [showOptions, setShowOptions] = useState(false);

  const options = [
    { value: "Yes", label: "Yes" },
    { value: "Probably Not", label: "Probably Not" },
  ];

  return (
    <div>
      <DropdownButton
        selectedOption={selectedOption}
        onClick={() => setShowOptions(!showOptions)}
        onMouseOver={() => setShowOptions(true)}
      />
      {showOptions && (
        <OptionsList
          options={options}
          setSelectedOption={setSelectedOption}
          setShowOptions={setShowOptions}
        />
      )}
    </div>
  );
}

export default Dropdown;
