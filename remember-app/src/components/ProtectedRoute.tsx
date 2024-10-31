import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const { isLoading, isAuthenticated } = useKindeAuth();
  console.log("ProtectedRoute " + isAuthenticated);

  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    if (!isAuthenticated) {
      return <h1>Not authenticated</h1>;
    } else {
      return <Outlet />;
    }
  }
}
