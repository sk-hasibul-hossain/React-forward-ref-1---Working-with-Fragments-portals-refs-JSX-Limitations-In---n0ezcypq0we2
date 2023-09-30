"use client";
import React, { useRef, useState } from "react";
import InputField from "./InputField";

function Home() {
  const newRef = useRef();
  const [values, setValues] = useState("");
  const [inputValue, setInputValue] = useState("");

  const getValue = (value) => {
    setInputValue(value);
  };

  const settingValue = () => {
    setValues(inputValue);
  };

  const focusInput = () => {
    newRef.current.focus();
  };

  return (
    <div>
      <InputField ref={newRef} getValue={getValue} type="text" />
      <br />
      <button id="settingValueButton" onClick={settingValue}>
        Set Value
      </button>
      <button id="focusInputButton" onClick={focusInput}>
        Focus the input
      </button>
      <br />
      <br />
      <textarea id="textarea" value={values}></textarea>
    </div>
  );
}

export default Home;
