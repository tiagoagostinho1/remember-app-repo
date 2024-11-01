import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { Home } from "./pages/Home.page";
import { Remember } from "./pages/Remember.page";

const router = createBrowserRouter([
  {
    path: "/",
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
