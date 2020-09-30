import React from "react";

export default function Link({ active, boundSetVisFilter, filter }) {
  return (
    <div>
      <button disabled={active} onClick={boundSetVisFilter}>
        {filter}
      </button>
    </div>
  );
}
