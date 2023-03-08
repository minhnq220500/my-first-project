import { Breadcrumb, Input, Space, Typography } from "antd";
import React from "react";

type Props = {};

const index = (props: Props) => {
  const { Title, Text } = Typography;
  const { Search } = Input;
  return (
    <Space
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "flex-start",
      }}
    >
      <Title level={3} style={{ fontWeight: "bold" }}>
        Shop
      </Title>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Shop</Breadcrumb.Item>
      </Breadcrumb>
    </Space>
  );
};

export default index;
