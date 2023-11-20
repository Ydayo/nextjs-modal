"use client";
import React, { MouseEvent, useState } from "react";
import Modal from "../Modal/Modal";

const Button = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const handleOpen = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setModalIsOpen(true);
  };
  const closeModal = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setModalIsOpen(false);
  };
  return (
    <div>
      <button onClick={handleOpen}>開く</button>
      <Modal elem="div" modalIsOpen={modalIsOpen} closeModal={closeModal}>
        <p style={{ color: "black" }}>開きました！</p>
      </Modal>
    </div>
  );
};

export default Button;
