import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {

  const navigate = useNavigate();

  const user = localStorage.getItem("user");

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme =
      localStorage.getItem("theme") || "light";

    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {

    const newTheme =
      theme === "light"
        ? "dark"
        : "light";

    setTheme(newTheme);

    localStorage.setItem(
      "theme",
      newTheme
    );

    document.body.classList.toggle("dark");
  };

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/auth");
    window.location.reload();
  };

  return (
    <nav className="navbar">

      <div className="logo">
        🍽 FoodBridge
      </div>

      <div className="nav-links">

        {user && (
          <>
            <Link to="/home">Home</Link>
            <Link to="/donate">Donate</Link>
            <Link to="/donations">Donations</Link>
            <Link to="/my-donations">My Donations</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </>
        )}

        <button
          className="theme-btn"
          onClick={toggleTheme}
        >
          {theme === "light"
            ? "🌙 Dark"
            : "☀ Light"}
        </button>

        {user && (
          <button
            className="logout-btn"
            onClick={logout}
          >
            Logout
          </button>
        )}

      </div>
    </nav>
  );
}

export default Navbar;