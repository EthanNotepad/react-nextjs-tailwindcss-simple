import axios from "axios";
import { useState } from "react";
import styles from "@/styles/ApiIndex.module.css";

async function sendData() {
  const data = { apikey: "d162ca5", s: "hello", r: "json", page: 2, v: 1 }; // The data you want to send

  const config = {
    headers: { "Content-Type": "application/json" }, // Set the content type to JSON
  };

  try {
    const response = await axios.get("/api/index?name=Query");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default function Index() {
  const [result, setResult] = useState("response content will appear here");

  async function handleSubmit() {
    const data = await sendData();
    setResult(data);
  }

  return (
    <div>
      <button className={styles.button} onClick={handleSubmit}>
        Send Data
      </button>
      {result && <div className={styles.result}>{JSON.stringify(result)}</div>}
    </div>
  );
}
