import React from "react";
import ok from "../assets/ok.svg";

const SuccessMessage = () => {
  return (
    <div className="modal_window">
      <div className="modal_window-block">
        <img className="modal_window-img" src={ok} width={200} alt="success" />
        <h2 className="modal_window-text">Сообщение отправлено успешно!</h2>
      </div>
    </div>
  );
};

export default SuccessMessage;
