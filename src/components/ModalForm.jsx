import React, { useState } from "react";
import FormControl from "./FormControl";

const ModalForm = ({ closeModal }) => {
  return (
    <div className="modal_window">
      <FormControl closeModal={closeModal} />
    </div>
  );
};

export default ModalForm;
