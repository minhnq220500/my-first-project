import { Space } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import SidebarMenu from "./components/SidebarMenu";
import style from "./mystyle.module.css";

export const DashboardLayout = () => {
  return (
    <>
      <Header />
      <div className={style.dashboardLoayout}>
        <SidebarMenu />
        <Outlet />
      </div>
    </>
  );
};
