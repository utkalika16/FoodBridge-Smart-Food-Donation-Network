import { useEffect, useState } from "react";

function MyDonations() {

  const [donations,setDonations] =
    useState([]);

  const user =
    JSON.parse(
      localStorage.getItem("user")
    );

  useEffect(()=>{

    const data =
      JSON.parse(
        localStorage.getItem(
          "donations"
        )
      ) || [];

    const myData =
      data.filter(item =>
        item.donor === user.name
      );

    setDonations(myData);

  },[]);

  const deleteDonation = (id) => {

    const all =
      JSON.parse(
        localStorage.getItem(
          "donations"
        )
      );

    const updated =
      all.filter(
        item => item.id !== id
      );

    localStorage.setItem(
      "donations",
      JSON.stringify(updated)
    );

    setDonations(
      donations.filter(
        item => item.id !== id
      )
    );

    alert("Deleted");
  };

  return (
    <div className="container">

      <h2>
        My Donations
      </h2>

      <br />

      <div className="cards">

        {donations.map(item => (

          <div
            className="card"
            key={item.id}
          >

            <h3>
              {item.food}
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

            <button
              className="delete-btn"
              onClick={() =>
                deleteDonation(item.id)
              }
            >
              Delete
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default MyDonations;