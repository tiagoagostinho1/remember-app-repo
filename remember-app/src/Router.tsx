import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RememberForm } from "./components/RememberForm";
import { App } from "./App";
import ProtectedRoute from "./components/ProtectedRoute";

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
            element: <RememberForm />,
          },
        ],
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
