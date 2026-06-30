import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./Navbar";
import Home from "./Home";
import Auth from "./Auth";
import DonateFood from "./DonateFood";
import Donations from "./Donations";
import DonationDetails from "./DonationDetails";
import MyDonations from "./MyDonations";
import About from "./About";
import Contact from "./Contact";

function ProtectedRoute({ children }) {
  const user = localStorage.getItem("user");

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return children;
}

function App() {

  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
      document.body.classList.add("dark");
    }
  }, []);

  return (
    <>
      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Navigate to="/auth" replace />}
        />

        <Route
          path="/auth"
          element={<Auth />}
        />

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />

        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <Contact />
            </ProtectedRoute>
          }
        />

        <Route
          path="/donate"
          element={
            <ProtectedRoute>
              <DonateFood />
            </ProtectedRoute>
          }
        />

        <Route
          path="/donations"
          element={
            <ProtectedRoute>
              <Donations />
            </ProtectedRoute>
          }
        />

        <Route
          path="/donations/:id"
          element={
            <ProtectedRoute>
              <DonationDetails />
            </ProtectedRoute>
          }
        />

        <Route
          path="/my-donations"
          element={
            <ProtectedRoute>
              <MyDonations />
            </ProtectedRoute>
          }
        />

      </Routes>
    </>
  );
}

export default App;