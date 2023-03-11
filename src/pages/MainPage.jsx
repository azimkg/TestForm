import React, { useState } from "react";
import AllMessages from "../components/AllMessages";
import ModalForm from "../components/ModalForm";

const MainPage = () => {
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  return (
    <div className="main_page">
      <button
        onClick={openModal}
        style={{ marginTop: "20px" }}
        className="main_page-modal_btn"
      >
        Отправить сообщение
      </button>
      {modal ? (
        <div className="main_page-forModal">
          <ModalForm closeModal={closeModal} />
        </div>
      ) : null}
      <AllMessages />
    </div>
  );
};

export default MainPage;
