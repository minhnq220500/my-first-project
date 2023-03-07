import React from "react";
import { Outlet } from "react-router-dom";

export const DashboardLayout = () => {
  return (
    <>
      <h1>hello</h1>
      <Outlet />
    </>
  );
};
