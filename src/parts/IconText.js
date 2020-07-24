import React from "react";
import Button from "elements/Button";

export default function IconText(props) {
  return (
    <Button
      className={`brand-text-icon ${props.isCentered ? "mx-auto" : ""}`}
      href=""
      type="link"
    >
      Stay<span className="text-gray-900">cation.</span>
    </Button>
  );
}
