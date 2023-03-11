import React from "react";
import ReactInputMask from "react-input-mask";
import ok from "../../assets/ok.svg";
import warning from "../../assets/warning.svg";

const Inputs = ({
  message,
  name,
  phone,
  handleMessageChange,
  handleNameChange,
  handlePhoneChange,
  isValidMessage,
  isValidName,
  isValidPhone,
  valueCheck,
}) => {
  return (
    <>
      <div className="form_control-bloc">
        {valueCheck ? (
          <div className="block_fromValid">
            <img className="block_fromValid-img" src={warning} alt="success" />
            <p className="error_modal">Заполните все поля верно</p>
          </div>
        ) : null}
      </div>
      <div className="form_control-block">
        <label className="form_control-label">Номер телефона</label>
        <ReactInputMask
          mask="+7 (999) 999-99-99"
          className="form_control-input"
          type="tel"
          value={phone}
          onChange={handlePhoneChange}
          placeholder="+7 (999) 999-99-99"
        />
      </div>
      {isValidPhone ? (
        <div className="block_fromValid">
          <img className="block_fromValid-img" src={ok} alt="success" />
          <p style={{ color: "green" }}>Поле заполнено верно</p>
        </div>
      ) : (
        <div className="block_fromValid">
          <img className="block_fromValid-img" src={warning} alt="warning" />
          <p style={{ color: "red" }}>Поле заполнено не верно</p>
        </div>
      )}
      <div className="form_control-block">
        <label className="form_control-label">Имя</label>
        <input
          className="form_control-input"
          type="text"
          value={name}
          placeholder="Введите свое имя: Иван"
          onChange={handleNameChange}
        />
      </div>
      {isValidName ? (
        <div className="block_fromValid">
          <img className="block_fromValid-img" src={ok} alt="success" />
          <p style={{ color: "green" }}>Поле заполнено верно</p>
        </div>
      ) : (
        <div className="block_fromValid">
          <img className="block_fromValid-img" src={warning} alt="warning" />
          <p style={{ color: "red" }}>Поле только для кирилицы</p>
        </div>
      )}
      <div className="form_control-block">
        <label className="form_control-label">Сообщение</label>
        <textarea
          className="form_control-area"
          type="text"
          value={message}
          onChange={handleMessageChange}
          placeholder="Введите свое сообщение"
        />
        {isValidMessage ? (
          <div className="block_fromValid">
            <img className="block_fromValid-img" src={ok} alt="success" />
            <p style={{ color: "green" }}>Поле заполнено верно</p>
          </div>
        ) : (
          <div className="block_fromValid">
            <img className="block_fromValid-img" src={warning} alt="warning" />
            <p style={{ color: "red" }}>Поле только для кирилицы</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Inputs;
