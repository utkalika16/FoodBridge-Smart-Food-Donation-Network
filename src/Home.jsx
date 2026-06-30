import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Home() {

  const [foods, setFoods] = useState([]);

  useEffect(() => {

    async function fetchFoodData() {

      try {

        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken"
        );

        const data = await response.json();

        setFoods(data.meals || []);

      } catch (error) {

        console.log("API Error:", error);

      }
    }

    fetchFoodData();

  }, []);

  return (
    <>
      <section className="hero">

        <h1>FoodBridge</h1>

        <p>
          Connecting food donors, NGOs and
          volunteers to reduce food waste and
          feed communities in need.
        </p>

        <Link to="/donate">
          <button className="hero-btn">
            Donate Now
          </button>
        </Link>

      </section>

      <section className="section">

        <h2>Impact Statistics</h2>

        <div className="stats">

          <div className="stat-box">
            <h2>1500+</h2>
            <p>Meals Saved</p>
          </div>

          <div className="stat-box">
            <h2>250+</h2>
            <p>Active Donors</p>
          </div>

          <div className="stat-box">
            <h2>50+</h2>
            <p>NGO Partners</p>
          </div>

        </div>

      </section>

      <section className="section">

        <h2>Food Suggestions (API Data)</h2>

        <div className="cards">

          {foods.slice(0, 6).map(food => (

            <div
              className="card"
              key={food.idMeal}
            >

              <img
                src={food.strMealThumb}
                alt={food.strMeal}
                style={{
                  width: "100%",
                  borderRadius: "10px"
                }}
              />

              <h3>{food.strMeal}</h3>

              <p>
                Category:
                {food.strCategory}
              </p>

            </div>

          ))}

        </div>

      </section>

      <section className="section">

        <h2>How FoodBridge Works</h2>

        <div className="cards">

          <div className="card">
            <h3>🍱 Donate</h3>
            <p>Add surplus food details.</p>
          </div>

          <div className="card">
            <h3>🏢 NGOs Claim</h3>
            <p>Nearby NGOs claim food.</p>
          </div>

          <div className="card">
            <h3>🚚 Deliver</h3>
            <p>Food reaches people in need.</p>
          </div>

        </div>

      </section>

    </>
  );
}

export default Home;