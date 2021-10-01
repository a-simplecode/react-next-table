import React from "react";
export default function SVGChevronRight(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      fill={props.color ?? "currentColor"}
      viewBox="0 0 24 24"
    >
      <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
    </svg>
  );
}
