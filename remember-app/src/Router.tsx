import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { Home } from "./pages/Home.page";
import { Remember } from "./pages/Remember.page";
import { App } from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
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
]);

export function Router() {
  return <RouterProvider router={router} />;
}
