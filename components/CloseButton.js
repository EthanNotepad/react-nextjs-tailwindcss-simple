import styles from "@/styles/ApiIndex.module.css";

export default function CloseButton(props) {
  const isVisible = props.isVisible;
  const handleButtonClick = props.handleButtonClick;
  return (
    <>
      <div className={isVisible ? styles.visible : styles.hidden}>
        <button
          className="font-mono text-lg shadow-sm border-2 rounded-xl border-solid border-indigo-600 px-4 py-2 mt-2 mx-2"
          onClick={handleButtonClick}
        >
          X
        </button>
      </div>
    </>
  );
}
