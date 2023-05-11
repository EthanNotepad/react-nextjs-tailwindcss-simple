import React, { useState } from "react";
import styles from "@/styles/ApiIndex.module.css";
import CloseButton from "./CloseButton";
// import CloseButton from "@/Components/CloseButton";

export default function CreateDialog() {
  const [isVisible, setIsVisible] = useState(false);

  function handleButtonClick() {
    setIsVisible(!isVisible);
  }

  return (
    <div>
      <button
        className="font-mono text-lg shadow-sm border-2 rounded-xl border-solid border-indigo-600 px-4 py-2 mt-2 mx-2"
        onClick={handleButtonClick}
      >
        Create Dialog
      </button>
      <div className={isVisible ? styles.visible : styles.hidden}>
        <CloseButton
          isVisible={isVisible}
          handleButtonClick={handleButtonClick}
        />
        <p>Content</p>
      </div>
    </div>
  );
}
