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
      const response = await axios.post("http://localhost:3000/api/login", {
        username,
        password,
      });
      console.log(response.data);
      // If authentication is successful, redirect to dashboard
      history.push("/apiindex");
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
        {error && <p>{error}</p>}
      </div>
    </>
  );
}
