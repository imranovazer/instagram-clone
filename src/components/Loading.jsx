import React from "react";
import { Space, Spin } from "antd";

const Loading = () => (
  <div className="w-full h-screen flex items-center  justify-center text-black">
    <Space size="middle">
      <Spin size="large" />
    </Space>
  </div>
);

export default Loading;
