import React, { useState } from "react";
import propTypes from "prop-types";

import "./index.scss";

export default function InputNumber(props) {
  const {
    className,
    value,
    placeholder,
    name,
    min,
    max,
    prefix,
    suffix,
    isSuffixPlural,
  } = props;
  const [inputValue, setInputValue] = useState(`${prefix}${value}${suffix}`);
  const regExrNumber = "[0-9]*";

  const onChange = (e) => {
    let value = String(e.target.value);
    if (prefix) value = value.replace(prefix);
    if (suffix) value = value.replace(suffix);

    const patternNumeric = new RegExp(regExrNumber);
    const isNumeric = patternNumeric.test(value);

    if (isNumeric && +value <= max && +value >= min) {
      props.onChange({
        target: {
          name: name,
          value: +value,
        },
      });
      setInputValue(
        `${prefix ? prefix + " " : ""}${value}${suffix ? " " + suffix : ""}${
          isSuffixPlural && value > 1 ? "s" : ""
        }`
      );
    }
  };

  const minus = () => {
    value > min &&
      onChange({
        target: {
          name: name,
          value: +value - 1,
        },
      });
  };

  const plus = () => {
    value < max &&
      onChange({
        target: {
          name: name,
          value: +value + 1,
        },
      });
  };

  return (
    <div className={["input-number mb-3", className].join(" ")}>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text minus" onClick={minus}>
            -
          </span>
        </div>
        <input
          className="form-control"
          min={min}
          max={max}
          name={name}
          pattern={regExrNumber}
          placeholder={placeholder ? placeholder : "0"}
          value={String(inputValue)}
          onChange={onChange}
        />
        <div className="input-group-append">
          <span className="input-group-text plus" onClick={plus}>
            +
          </span>
        </div>
      </div>
    </div>
  );
}

InputNumber.defaultProps = {
  min: 1,
  max: 1,
  prefix: "",
  suffix: "",
};

InputNumber.propTypes = {
  value: propTypes.oneOfType([propTypes.string, propTypes.number]),
  isSuffixPlural: propTypes.bool,
  onChange: propTypes.func,
  placeholder: propTypes.string,
  className: propTypes.string,
};
