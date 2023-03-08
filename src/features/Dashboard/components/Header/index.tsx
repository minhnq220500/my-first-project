import { Space, Typography } from "antd";
import { Logo2, Vector } from "assets";
import React from "react";
import style from "./mystyle.module.css";

export const Header = () => {
  const { Title } = Typography;
  return (
    <Space
      direction="horizontal"
      size={"middle"}
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        height: "119px",
        alignItems: "center",
        paddingLeft: "40px",
        paddingRight: "40px",
        backgroundColor: "#C6E5F4",
      }}
    >
      <Space
        direction="horizontal"
        size={"middle"}
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          gap: "50px",
        }}
      >
        <img src={Logo2} className={style.logoDashboard} alt="Any" />
        <Title level={1}>Mobile Shopping</Title>
      </Space>
      <Space
        direction="horizontal"
        size={"middle"}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={Vector} className={style.userImage} alt="Any" />
      </Space>
    </Space>
  );
};
