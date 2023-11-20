"use client";
import React, { MouseEvent } from "react";
import ReactModal from "react-modal";

type modalProps = {
  elem: string;
  modalIsOpen: boolean;
  closeModal: (e: MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
};

const Modal = ({ elem, modalIsOpen, closeModal, children }: modalProps) => {
  ReactModal.setAppElement(elem);

  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
    >
      {children}
      <button onClick={closeModal}>戻す</button>
    </ReactModal>
  );
};

export default Modal;
