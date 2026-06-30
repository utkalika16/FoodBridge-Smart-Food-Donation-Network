function Contact() {

  const submitForm = () => {
    alert(
      "Message Submitted Successfully"
    );
  };

  return (
    <div className="container">

      <div className="form">

        <h2>Contact Us</h2>

        <input
          type="text"
          placeholder="Your Name"
        />

        <input
          type="email"
          placeholder="Your Email"
        />

        <textarea
          rows="5"
          placeholder="Message"
        />

        <button
          onClick={submitForm}
        >
          Send Message
        </button>

        <br /><br />

        <h4>
          📧 support@foodbridge.com
        </h4>

        <h4>
          📞 +91 9876543210
        </h4>

      </div>
    </div>
  );
}

export default Contact;
