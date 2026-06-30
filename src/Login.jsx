import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate =
    useNavigate();

  const [username,
    setUsername] =
    useState("");

  const [password,
    setPassword] =
    useState("");

  const handleLogin =
    () => {

      if (
        username === "" ||
        password === ""
      ) {

        alert(
          "Please fill all fields"
        );

        return;
      }

      localStorage.setItem(
        "user",
        username
      );

      alert(
        "Login Successful"
      );

      navigate("/dashboard");
    };

  return (

    <div className="container">

      <h2>Login</h2>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) =>
          setUsername(
            e.target.value
          )
        }
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) =>
          setPassword(
            e.target.value
          )
        }
      />

      <br /><br />

      <button
        onClick={handleLogin}
      >
        Login
      </button>

    </div>
  );
}

export default Login;