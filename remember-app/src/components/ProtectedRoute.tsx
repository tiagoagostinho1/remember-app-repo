import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { Button, Group, Text } from "@mantine/core";
import { Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const { isLoading, isAuthenticated } = useKindeAuth();
  console.log("ProtectedRoute " + isAuthenticated);

  if (isLoading) {
    return (
      <Text size="lg" ta="center">
        Loading ...
      </Text>
    );
  } else {
    if (!isAuthenticated) {
      return (
        <Group gap={8} ta="center">
          <Text size="lg" ta="center">
            Not authenticated
          </Text>
          <Button> Login </Button>
        </Group>
      );
    } else {
      return <Outlet />;
    }
  }
}
