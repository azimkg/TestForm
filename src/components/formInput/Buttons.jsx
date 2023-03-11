import React from "react";

const Buttons = ({ closeModal, postMessageFunc }) => {
  return (
    <>
      <div className="form_control-blockOfBtn">
        <button onClick={closeModal} className="main_page-modalClose_btn">
          Закрыть
        </button>
        <button onClick={postMessageFunc} className="main_page-modal_btn">
          Отправить
        </button>
      </div>
    </>
  );
};

export default Buttons;
