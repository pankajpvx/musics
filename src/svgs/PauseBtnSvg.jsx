import React from "react";

export default function PauseBtnSvg({ size = 40 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="45" fill="#3B82F6" />
      <rect x="35" y="35" width="10" height="30" rx="2" fill="white" />
      <rect x="55" y="35" width="10" height="30" rx="2" fill="white" />
    </svg>
  );
}
