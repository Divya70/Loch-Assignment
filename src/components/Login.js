import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    let result = e.target.value;
    if (result.includes("@") && result.includes(".")) {
      setError("");
    }
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isValidEmail(email)) {
      window.location.href = "https://app.loch.one/welcome";
    } else {
      setError("Please enter a valid email");
    }
  };

  const isValidEmail = (email) => {
    return email.includes("@") && email.includes(".");
  };
  return (
    <div className="col-lg-5 col-md-12 col-sm-12">
      <div className="text-center pt">
        <p className="signup">
          Sign up for <br /> exclusive access.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            className="input"
            placeholder="your email address"
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
          <p className="text-center text-danger">{error}</p>
          <br />
          <input
            type="submit"
            className="btn btn-primary mb-4"
            value="Get Started"
          />
        </form>
        <br />
        <p className="tagline">
          You’ll receive an email with an invite link to join.
        </p>
      </div>
    </div>
  );
};
export default Login;
