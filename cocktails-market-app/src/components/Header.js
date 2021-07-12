import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";
import Search from "@material-ui/icons/Search";
import PopUp from "./PopUp";
import Modal from "./Modal";
import Cart from "./icons/Cart";
import { DataContext } from "./DataContext";
import Logo from "./icons/Logo";

const Header = () => {
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { cartItem } = useContext(DataContext);
  const openModal = () => {
    if (cartItem.length === 0) {
      alert("Спочатку оберіть коктейль");
      return;
    }
    setIsOpen(true);
  };

  return (
    <header>
      <div className="wrapper">
        <div className="logo">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="searchBox">
          <input
            type="text"
            className="searchInput"
            placeholder="Search"
            value={value}
            onChange={(evt) => setValue(evt.target.value)}
          />
          <Link
            className="searchButton"
            onClick={() => setValue("")}
            to={`/cocktails/search?name=${value}`}
          >
            <Search />
          </Link>
        </div>
        <div className="cart" onClick={openModal}>
          <Cart width="80px" height="80px" fill="#2f3640" />
          <PopUp />
        </div>
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </header>
  );
};

export default Header;
