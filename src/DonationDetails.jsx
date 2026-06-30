import { useParams } from "react-router-dom";

function DonationDetails() {

  const { id } = useParams();

  const donations =
    JSON.parse(
      localStorage.getItem(
        "donations"
      )
    ) || [];

  const donation =
    donations.find(
      item =>
      item.id.toString() === id
    );

  if(!donation){
    return (
      <h2>
        Donation Not Found
      </h2>
    );
  }

  return (
    <div className="container">

      <div className="details-box">

        <h2>
          Donation Details
        </h2>

        <br />

        <p>
          Food:
          {donation.food}
        </p>

        <p>
          Quantity:
          {donation.quantity}
        </p>

        <p>
          Location:
          {donation.location}
        </p>

        <p>
          Expiry:
          {donation.expiry}
        </p>

        <p>
          Category:
          {donation.category}
        </p>

        <p>
          Donor:
          {donation.donor}
        </p>

        <p>
          Status:
          {donation.status}
        </p>

      </div>

    </div>
  );
}

export default DonationDetails;