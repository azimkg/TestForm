import React, { useReducer } from "react";
import axios from "axios";

const API = "http://localhost:8000/message";

export const messageContext = React.createContext();

const INIT_STATE = {
  message: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_MESSAGE":
      return { ...state, message: action.payload.data };
    default:
      return state;
  }
};

const ContextMessageProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getAllMessages() {
    let data = await axios(API);
    dispatch({
      type: "GET_MESSAGE",
      payload: data,
    });
  }
  async function postMessage(newMessage) {
    await axios.post(API, newMessage);
    getAllMessages();
  }

  return (
    <messageContext.Provider
      value={{ message: state.message, getAllMessages, postMessage }}
    >
      {children}
    </messageContext.Provider>
  );
};
export default ContextMessageProvider;
