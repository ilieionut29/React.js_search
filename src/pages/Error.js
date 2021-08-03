import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="error-page section">
      <div class="error-container">
        <h1>oooops! dead line... </h1>
        <Link to="/" className="btn btn-primary">
          back to homepage
        </Link>
      </div>
    </section>
  );
};

export default Error;
