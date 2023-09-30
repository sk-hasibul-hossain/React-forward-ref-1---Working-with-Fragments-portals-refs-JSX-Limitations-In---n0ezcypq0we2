"use client";
import React, { useRef, forwardRef, useState, useEffect } from "react";
const InputField = forwardRef(({ getValue }, newRef) => {
  // const ref = useRef();
  const [inputValue, setInputValue] = useState("");
  getValue(inputValue);
  return (
    <div>
      <input
        id="input"
        type="text"
        ref={newRef}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      />
    </div>
  );
});
export default InputField;
