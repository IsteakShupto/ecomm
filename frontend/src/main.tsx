import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import Signin from "./pages/Signin.tsx";
import Home from "./pages/Home.tsx";
import Cart from "./components/Cart.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        index: true,
        element: <Home />,
      },
      {
        path: "cart",
        element: <Cart />,
      },

      {
        path: "signin",
        element: <Signin />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
