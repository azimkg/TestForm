import React from "react";
import "./App.css";
import ContextMessageProvider from "./context/contextMessage";
import Routing from "./Routing";

const App = () => {
  return (
    <ContextMessageProvider>
      <Routing />
    </ContextMessageProvider>
  );
};

export default App;
