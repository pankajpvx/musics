import React from "react";

function Spacer({ marginSize, height, id }) {
  return (
    <div
      id={id}
      className="spacer"
      style={{ marginBlock: marginSize ? marginSize : "initial", height }}
    />
  );
}

export default Spacer;
