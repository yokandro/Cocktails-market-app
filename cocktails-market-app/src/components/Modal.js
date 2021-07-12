import React, { useContext } from "react";
import "../css/Modal.css";
import { createPortal } from "react-dom";
import { DataContext } from "./DataContext";
import RemoveIcon from "./icons/RemoveIcon";

const Modal = ({ isOpen, setIsOpen }) => {
  const { cartItem, setCartItem } = useContext(DataContext);
  if (!isOpen) return null;
  const confirmModal = () => {
    if (cartItem.length === 0) {
      alert("Для підтвердження виберіть коктейль");
      setIsOpen(false);
      return;
    }
    console.log(cartItem);
    setCartItem([]);
    setIsOpen(false);
  };
  const removeItem = (itemId) => {
    const index = cartItem.findIndex((cocktail) => cocktail.idDrink === itemId);
    if (index !== -1) {
      cartItem.splice(index, 1);
      setCartItem([...cartItem]);
    }
  };
  return createPortal(
    <div className="overlay">
      <div className="Modal">
        <div className="modal-elements">
          {cartItem.map((item, index) => (
            <div key={index}>
              <img
                src={item.strDrinkThumb}
                alt={item.strDrink}
                width="100px"
                height="100px"
              />
              <p>{item.strDrink}</p>
              <button
                className="removeBtn"
                onClick={() => removeItem(item.idDrink)}
              >
                <RemoveIcon />
              </button>
            </div>
          ))}
        </div>
        <button className="confirm-btn" onClick={confirmModal}>
          Підтвердити
        </button>
        <button className="closeModalBtn" onClick={() => setIsOpen(false)}>
          X
        </button>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
