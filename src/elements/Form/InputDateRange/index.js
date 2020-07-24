import React, { useRef, useState, useEffect } from "react";
import propTypes from "prop-types";
import { DateRange } from "react-date-range";

import "./index.scss";
import "react-date-range/dist/styles.css"; // Main CSS file
import "react-date-range/dist/theme/default.css"; // Theme CSS file
import { dateFormat } from "utils/helpers";

export default function InputDateRange(props) {
  const { value, placeholder, name, className } = props;
  const [isShowed, setIsShowed] = useState(false);
  const refDate = useRef(null);

  const handleOnChange = (value) => {
    const target = {
      value: value.selection,
      name: name,
    };
    props.onChange(target);
  };

  const handleClickOutside = (event) => {
    if (refDate && refDate.current.contains(event.target)) {
      setIsShowed(false);
    }
  };

  const check = (focus) => {
    focus.indexOf(1) < 0 && setIsShowed(false);
  };

  const displayDate = `${
    value.startDate ? dateFormat(value.startDate) : ""
  } - ${value.endDate ? dateFormat(value.endDate) : ""}`;

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <div ref={refDate} className={["input-date mb-3", className].join(" ")}>
      <div className="input-group">
        <div className="input-group-prepend bg-gray-900">
          <span className="input-group-text">
            <img src="icons/icon-calendar.svg" alt="Icon Calendar" />
          </span>
        </div>
        <input
          readOnly
          type="text"
          className="form-control"
          value={displayDate}
          placeholder={placeholder}
          onClick={() => setIsShowed(!isShowed)}
        />
        {isShowed && (
          <div className="date-range-wrapper">
            <DateRange
              editableDateInputs={true}
              onChange={handleOnChange}
              moveRangeOnFirstSelection={false}
              onRangeFocusChange={check}
              ranges={[value]}
            />
          </div>
        )}
      </div>
    </div>
  );
}

InputDateRange.propTypes = {
  value: propTypes.object,
  onChange: propTypes.func,
  placeholder: propTypes.string,
  className: propTypes.string,
};
