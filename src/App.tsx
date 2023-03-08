import NotFoundPage from "components/NotFoundPage";
import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { DashboardLayout } from "./features/Dashboard/dashboardRoot";

const LoginPage = React.lazy(() => import("./features/Login/pages/Main"));
const Shop = React.lazy(() => import("./features/Shop/pages/Main"));
const PhoneDetail = React.lazy(
  () => import("./features/Shop/pages/PhoneDetail")
);
const Cart = React.lazy(() => import("./features/Cart/pages/Main"));
const MyProfile = React.lazy(() => import("./features/MyProfile/pages/Main"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />, //layout
    // errorElement: <NotFoundPage />,
    children: [
      { path: "shop", element: <Shop /> },
      { path: "shop/:id", element: <PhoneDetail /> },
      { path: "cart", element: <Cart /> },
      { path: "my-profile", element: <MyProfile /> },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
