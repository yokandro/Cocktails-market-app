import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h1 style={{ color: "#fff" }}>Not Found</h1>
      <Link style={{ textDecoration: "none", color: "#fff" }} to="/">
        Click here!
      </Link>
    </div>
  );
};

export default NotFoundPage;
