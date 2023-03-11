import React, { useContext, useState } from "react";
import { messageContext } from "../context/contextMessage";
import Buttons from "./formInput/Buttons";

import Inputs from "./formInput/Inputs";
import SuccessMessage from "./SuccessMessage";

// Проверка на валидность номера
const regex = /^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/;

// Проверка на кирилицу
const text = /[^A-Za-z0-9]/g;

const FormControl = ({ closeModal }) => {
  // Состояния
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const { postMessage } = useContext(messageContext);

  //   Проверка на правильность введенных данных
  const [isValidPhone, setIsValidPhone] = useState(false);
  const [isValidName, setIsValidName] = useState(false);
  const [isValidMessage, setIsValidMessage] = useState(false);
  const [valueCheck, setValueCheck] = useState(false);
  const [success, setSuccess] = useState(false);

  const handlePhoneChange = (event) => {
    const value = event.target.value;
    setPhone(value);
    setIsValidPhone(regex.test(value));
  };
  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
    setIsValidName(text.test(value));
  };
  const handleMessageChange = (event) => {
    const value = event.target.value;
    setMessage(value);
    setIsValidMessage(text.test(value));
  };

  // Функция отправки данных на сервер
  function postMessageFunc() {
    if (
      isValidMessage === false &&
      isValidName === false &&
      isValidPhone === false
    ) {
      return setValueCheck(true);
    }
    // Приводим ноиер телефона в формат +79999999999
    let str = phone.replace(/[\])}[{(]/g, "");
    let number = str.replace(/[\s-]/g, "");
    // Собираем обЪект
    let newMessage = {
      number,
      name,
      message,
    };
    postMessage(newMessage);
    setSuccess(true);
    setTimeout(() => {
      closeModal();
    }, 5000);
    setPhone("");
    setName("");
    setMessage("");
  }

  return (
    <>
      {success ? (
        <SuccessMessage />
      ) : (
        <div className="main_from">
          <div className="form_control">
            <Inputs
              valueCheck={valueCheck}
              message={message}
              name={name}
              phone={phone}
              isValidMessage={isValidMessage}
              isValidName={isValidName}
              isValidPhone={isValidPhone}
              handleMessageChange={handleMessageChange}
              handleNameChange={handleNameChange}
              handlePhoneChange={handlePhoneChange}
            />
            <Buttons
              postMessageFunc={postMessageFunc}
              closeModal={closeModal}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default FormControl;
