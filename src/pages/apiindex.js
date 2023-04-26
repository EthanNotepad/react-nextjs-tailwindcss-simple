import axios from "axios";
import { useState } from "react";
import styles from "@/styles/ApiIndex.module.css";

async function sendData() {
  const data = {
    params: { name: "Sheng", s: "hello", r: "json", page: 2, v: 1 },
  }; // The data you want to send

  const config = {
    headers: { "Content-Type": "application/json" }, // Set the content type to JSON
  };

  try {
    const response = await axios.get("/api/hello", data, config);
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
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <p className="text-base pb-8">text-base</p>
      <button
        className="font-mono text-lg shadow-sm border-2 rounded-xl border-solid border-indigo-600 px-4 py-2"
        onClick={handleSubmit}
      >
        Send Data
      </button>
      {result && <div className={styles.result}>{JSON.stringify(result)}</div>}
    </div>
  );
}
