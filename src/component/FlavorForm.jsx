import React, { useState } from "react";

export default function FlavorForm() {
  const [value, setValue] = useState("");
  const [valueRadio, setValueRadio] = useState("");
  return (
    <div className="App">
      <div>
        <ul>
          <li>
            <input
              type="radio"
              value="1"
              onChange={(e) => setValueRadio(e.target.value)}
              name="radioTest"
            />{" "}
            <span>1</span>
          </li>{" "}
          <li>
            <input
              type="radio"
              value="2"
              onChange={(e) => setValueRadio(e.target.value)}
              name="radioTest"
            />{" "}
            <span>2</span>
          </li>
        </ul>
      </div>

      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <p>{value}</p>
      <p>valeur de radio {valueRadio}</p>
    </div>
  );
}
