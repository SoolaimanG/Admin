import { useState } from "react";

export default function Toggle() {
  const [condition, setCondition] = useState(false);
  return (
    <div
      onClick={() => {
        setCondition((prev) => !prev);
      }}
      className={`toggle ${condition ? "tgg-active" : ""}`}
    >
      <div
        className={`toggle-btn ${
          condition ? "toggle-active" : "toggle-inactive"
        }`}
      ></div>
    </div>
  );
}
