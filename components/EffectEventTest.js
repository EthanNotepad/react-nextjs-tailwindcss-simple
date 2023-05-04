import React, { useState, useEffect } from "react";

export default function EffectEventTest() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const myButton = document.getElementById("my-button");
    if (myButton) {
      myButton.addEventListener("click", () => {
        setCount(count + 1);
      });
    }
  }, [count]);

  return (
    <div>
      <button id="my-button">Click me</button>
      <p>Count: {count}</p>
    </div>
  );
}
