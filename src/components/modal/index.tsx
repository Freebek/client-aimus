import React, { Dispatch, SetStateAction } from "react";
import ServerInfo from "./ServerInfo";
import { Server } from "@/components/home/Servers";

const Modal = ({
  type,
  setIsOpen,
  isOpen,
  data,
}: {
  type: number;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
  data: Server;
}) => {
  function modalContent() {
    switch (type) {
      case 1:
        return <ServerInfo data={data} setIsOpen={setIsOpen} />;
      
    }
  }
  return (
    <>
      <div
        className={`custom-modal-container ${isOpen && "custom-modal-open"}`}
      >
        <div
          onClick={() => setIsOpen(false)}
          className={`custom-modal-overlay`}
        ></div>
        <div className="offcanvas__overla y-white"></div>
        {modalContent()}
      </div>
    </>
  );
};

export default Modal;
