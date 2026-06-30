import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Auth() {

  const navigate = useNavigate();

  const [isLogin, setIsLogin] =
    useState(true);

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const submit = () => {

    if (
      !name ||
      !email ||
      !password
    ) {
      alert("Please fill all fields");
      return;
    }

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      alert(
        "Enter a valid email address"
      );
      return;
    }

    if (password.length < 6) {
      alert(
        "Password must be at least 6 characters"
      );
      return;
    }

    const user = {
      name,
      email
    };

    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );

    alert(
      isLogin
        ? "Login Successful"
        : "Account Created Successfully"
    );

    navigate("/home");
  };

  return (
    <div className="container">

      <div className="form">

        <h1
          style={{
            textAlign:"center",
            color:"#2e7d32"
          }}
        >
          🍽 FoodBridge
        </h1>

        <h2
          style={{
            textAlign:"center"
          }}
        >
          {isLogin
            ? "Login"
            : "Create Account"}
        </h2>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e)=>
            setName(e.target.value)
          }
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e)=>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>
            setPassword(e.target.value)
          }
        />

        <button
          onClick={submit}
        >
          {isLogin
            ? "Login"
            : "Sign Up"}
        </button>

        <br />
        <br />

        <p
          style={{
            textAlign:"center",
            cursor:"pointer",
            color:"#2e7d32",
            fontWeight:"bold"
          }}
          onClick={() =>
            setIsLogin(!isLogin)
          }
        >
          {isLogin
            ? "New User? Create Account"
            : "Already Have Account? Login"}
        </p>

      </div>

    </div>
  );
}

export default Auth;