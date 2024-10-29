import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const { isLoading, isAuthenticated, login } = useKindeAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isLoading && !isAuthenticated) {
    return <h1>Not authenticated</h1>;
  }

  if (!isLoading && isAuthenticated) {
    return <Outlet />;
  }
}
