import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Donations() {

  const [donations,setDonations] =
    useState([]);

  const [search,setSearch] =
    useState("");

  useEffect(()=>{

    const data =
      JSON.parse(
        localStorage.getItem(
          "donations"
        )
      ) || [];

    setDonations(data);

  },[]);

  const claimDonation = (id) => {

    const user =
      JSON.parse(
        localStorage.getItem("user")
      );

    const updated =
      donations.map(item =>
        item.id === id
          ? {
              ...item,
              status:"Claimed",
              claimedBy:user.name
            }
          : item
      );

    setDonations(updated);

    localStorage.setItem(
      "donations",
      JSON.stringify(updated)
    );

    alert("Donation Claimed");
  };

  const filtered =
    donations.filter(item =>
      item.food
      .toLowerCase()
      .includes(
        search.toLowerCase()
      )
    );

  return (
    <div className="container">

      <h2>
        Available Donations
      </h2>

      <br />

      <input
        placeholder="Search Food..."
        value={search}
        onChange={(e)=>
          setSearch(e.target.value)
        }
      />

      <br /><br />

      <div className="cards">

        {filtered.map(item => (

          <div
            className="card"
            key={item.id}
          >

            <h3>
              🍱 {item.food}
            </h3>

            <p>
              Quantity:
              {item.quantity}
            </p>

            <p>
              Location:
              {item.location}
            </p>

            <p>
              Status:
              {item.status}
            </p>

            {item.status ===
            "Available" ? (

              <button
                className="action-btn"
                onClick={() =>
                  claimDonation(item.id)
                }
              >
                Claim Donation
              </button>

            ) : (

              <p>
                Claimed By:
                {item.claimedBy}
              </p>

            )}

            <br />

            <Link
              to={`/donations/${item.id}`}
            >
              View Details
            </Link>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Donations;