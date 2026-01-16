"use client";

import { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  return (
    <div className="modal">
      {children}
    </div>
  );
};

export default Modal;

