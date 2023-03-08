import {
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Space, theme } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./mystyle.module.css";
const { Sider } = Layout;

type Props = {};

const SidebarMenu = (props: Props) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate();
  return (
    <Layout>
      <Space
        style={{
          height: "100%",
        }}
      >
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <Menu
            theme="light"
            mode="vertical"
            onClick={(item) => {
              navigate(item.key);
            }}
            items={[
              {
                key: "/dashboard/shop",
                icon: <ShopOutlined />,
                label: "Shop",
              },
              {
                key: "/dashboard/cart",
                icon: <ShoppingCartOutlined />,
                label: "Cart",
              },
              {
                key: "/dashboard/my-profile",
                icon: <UserOutlined />,
                label: "My Profile",
              },
            ]}
          />
        </Sider>
      </Space>
    </Layout>
  );
};

export default SidebarMenu;
