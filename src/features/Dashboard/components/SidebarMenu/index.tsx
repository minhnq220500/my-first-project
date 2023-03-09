import {
  LogoutOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import "./mystyle.module.css";

type Props = {};

const SidebarMenu = (props: Props) => {
  const navigate = useNavigate();
  return (
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
  );
};

export default SidebarMenu;
