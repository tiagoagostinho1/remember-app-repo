import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./pages/Login.page";
import { SignUp } from "./pages/SignUp.page";
import { RememberForm } from "./components/RememberForm";
import { App } from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/remember",
        element: <RememberForm />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
