import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8888/timetracker/public/login",
        {
          username,
          password,
        }
      );
      console.log(response.data);
      if (response.data.code == 200) {
        // If authentication is successful, redirect to dashboard
        setError(response.data.msg);
        // history.push("/apiindex");
      } else {
        setError(response.data.msg);
      }
    } catch (error) {
      // If there's an error, display the error message
      setError(error.response.data.message);
    }
  };

  return (
    <>
      <div>
        <h1 className="text-3xl">Login</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="submit">Login</button>
        </form>
        {error && <h1>{error}</h1>}
      </div>
    </>
  );
}
