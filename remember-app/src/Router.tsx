import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { Home } from "./pages/Home.page";
import { Remember } from "./pages/Remember.page";
import { App } from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "/remember",
            element: <Remember />,
          },
        ],
      },
    ],
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
