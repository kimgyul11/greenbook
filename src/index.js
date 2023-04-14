import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllProducts from "./pages/AllProducts";
import Home from "./pages/Home";
import MyCart from "./pages/MyCart";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";
import NewProduct from "./pages/NewProduct";
import ProtectedRoute from "./pages/ProtectedRoute";
import Pathogen from "./components/productComponent/Pathogen";
import LifeProducts from "./components/productComponent/LifeProducts";
import Electronics from "./components/productComponent/Electronics";
import Architecture from "./components/productComponent/Architecture";
import Diary from "./pages/Diary";
import DiaryDetail from "./pages/DiaryDetail";
const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/carts",
        element: (
          <ProtectedRoute>
            <MyCart />
          </ProtectedRoute>
        ),
      },
      {
        path: "/products",
        element: (
          <ProtectedRoute>
            <AllProducts />{" "}
          </ProtectedRoute>
        ),
      },
      {
        path: "/products/life",
        element: (
          <ProtectedRoute>
            <LifeProducts />
          </ProtectedRoute>
        ),
      },
      { path: "/products/electronics", element: <Electronics /> },
      { path: "/products/architecture", element: <Architecture /> },
      { path: "/products/pathogen", element: <Pathogen /> },
      {
        path: "/products/new",
        element: (
          <ProtectedRoute requireAdmin>
            <NewProduct />
          </ProtectedRoute>
        ),
      },
      { path: "/products/:productId", element: <ProductDetail /> },
      { path: "/diary/", element: <Diary /> },
      { path: "/diary/:diaryId", element: <DiaryDetail /> },
    ],
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
