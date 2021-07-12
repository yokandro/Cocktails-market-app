import React from "react";
import "../css/Footer.css";
import { letterArr } from "../utils";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container">
      <footer className="abc">
        {letterArr.map((letter, index) => (
          <Link
            key={index}
            className="letter"
            to={`/cocktails/filter?letter=${letter.toLowerCase()}`}
          >
            {letter}
          </Link>
        ))}
      </footer>
    </div>
  );
};

export default Footer;
