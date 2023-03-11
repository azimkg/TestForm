import React, { useContext, useEffect } from "react";
import { messageContext } from "../context/contextMessage";

const AllMessages = () => {
  const { getAllMessages, message } = useContext(messageContext);
  useEffect(() => {
    getAllMessages();
  }, []);
  return (
    <>
      <h1 className="title">Все сообщения</h1>
      <table className="table">
        <tbody className="table_tbody">
          <tr className="table_tr">
            <th className="table_thForNum">№</th>
            <th className="table_th">Имя</th>
            <th className="table_th">Номер</th>
            <th className="table_th">Сообщения</th>
          </tr>
          {message?.map((item) => (
            <tr key={item.id} className="table_tr">
              <td className="table_tdForId">{item.id}</td>
              <td className="table_thAndTd">{item.name}</td>
              <td className="table_thAndTd">{item.number}</td>
              <td className="table_thAndTd">{item.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default AllMessages;
