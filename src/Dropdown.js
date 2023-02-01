import React, { useState } from "react";

function Dropdown() {
  const [selectedOption, setSelectedOption] = useState("Option 1");
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div className="flex w-20">
        <button className="rounded bg-white" onClick={handleToggle}>
          {selectedOption}‖
        </button>
      </div>
      {isOpen && (
        <div className="absolute z-10 bg-white shadow-md rounded mt-4">
          <ul className="list-reset">
            <li>
              <button
                className="block w-full px-4 py-2 text-left"
                value="Option 1"
                onClick={handleChange}
              >
                Option 1
              </button>
            </li>
            <li>
              <button
                className="block w-full px-4 py-2 text-left"
                value="Option 2"
                onClick={handleChange}
              >
                Option 2
              </button>
            </li>
            <li>
              <button
                className="block w-full px-4 py-2 text-left"
                value="Option 3"
                onClick={handleChange}
              >
                Option 3
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
