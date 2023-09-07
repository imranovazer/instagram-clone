import React, { createContext } from "react";
import { message } from "antd";

export const AlertContex = createContext(null);
const AlertLayout = ({ children }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const displayAlert = (type, content) => {
    messageApi.open({
      type: type ? "success" : "error",
      content: content,
    });
  };

  return (
    <AlertContex.Provider value={{ displayAlert }}>
      {contextHolder}
      {children}
    </AlertContex.Provider>
  );
};
export default AlertLayout;
