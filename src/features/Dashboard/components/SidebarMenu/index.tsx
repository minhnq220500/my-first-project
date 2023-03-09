import {
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Space, theme } from "antd";
import { Header } from "antd/es/layout/layout";
import { changeMenuState } from "features/Dashboard/dashboardSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import style from "./mystyle.module.css";
const { Sider } = Layout;

type Props = {};

const SidebarMenu = (props: Props) => {
  const menuState = useSelector((state: any) => state.dashboard.menuState);
  const dispatch = useDispatch();

  console.log(menuState);

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
        <Sider trigger={null} collapsible collapsed={menuState}>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <div className={style.menu}>
              <p style={{ fontWeight: 400 }}>Menu</p>
              {React.createElement(
                menuState ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: () => dispatch(changeMenuState(!menuState)),
                }
              )}
            </div>
          </Header>

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
              {
                key: "/",
                icon: <LogoutOutlined />,
                label: "Logout",
              },
            ]}
          />
        </Sider>
      </Space>
    </Layout>
  );
};

export default SidebarMenu;
