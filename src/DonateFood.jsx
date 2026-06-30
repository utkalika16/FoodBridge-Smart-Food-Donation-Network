import { useState } from "react";
import { useNavigate } from "react-router-dom";

function DonateFood() {
  const navigate = useNavigate();

  const [food, setFood] = useState("");
  const [quantity, setQuantity] = useState("");
  const [location, setLocation] = useState("");
  const [expiry, setExpiry] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = () => {
    if (
      !food ||
      !quantity ||
      !location ||
      !expiry ||
      !category
    ) {
      alert("Please fill all fields");
      return;
    }

    const donations =
      JSON.parse(
        localStorage.getItem("donations")
      ) || [];

    const user =
      JSON.parse(
        localStorage.getItem("user")
      );

    const newDonation = {
      id: Date.now(),
      food,
      quantity,
      location,
      expiry,
      category,
      donor: user.name,
      status: "Available"
    };

    donations.push(newDonation);

    localStorage.setItem(
      "donations",
      JSON.stringify(donations)
    );

    alert("Donation Added");

    navigate("/my-donations");
  };

  return (
    <div className="container">

      <div className="form">

        <h2>Donate Food</h2>

        <input
          placeholder="Food Name"
          value={food}
          onChange={(e)=>
            setFood(e.target.value)
          }
        />

        <input
          placeholder="Quantity"
          value={quantity}
          onChange={(e)=>
            setQuantity(e.target.value)
          }
        />

        <input
          placeholder="Location"
          value={location}
          onChange={(e)=>
            setLocation(e.target.value)
          }
        />

        <input
          type="datetime-local"
          value={expiry}
          onChange={(e)=>
            setExpiry(e.target.value)
          }
        />

        <select
          value={category}
          onChange={(e)=>
            setCategory(e.target.value)
          }
        >
          <option value="">
            Select Category
          </option>

          <option>
            Cooked Food
          </option>

          <option>
            Fruits
          </option>

          <option>
            Vegetables
          </option>

          <option>
            Bakery
          </option>
        </select>

        <button
          onClick={handleSubmit}
        >
          Donate Food
        </button>

      </div>
    </div>
  );
}

export default DonateFood;