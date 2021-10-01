import React from "react";
export default function SVGChevronLeft(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      fill={props.color ?? "currentColor"}
      viewBox="0 0 24 24"
    >
      <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
    </svg>
  );
}
