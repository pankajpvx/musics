import React from "react";

function PlayBtnSvg({ size = 40 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="45" fill="#3B82F6" />
      <path d="M40 35L70 50L40 65V35Z" fill="white" />
    </svg>
  );
}

export default PlayBtnSvg;
