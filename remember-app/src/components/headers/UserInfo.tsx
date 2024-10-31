import { ActionIcon, Button, Group, Text } from "@mantine/core";
import { IconLogout } from "@tabler/icons-react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

export function UserInfo() {
  const { login, register, logout, isAuthenticated, user, isLoading } =
    useKindeAuth();
  console.log("UserInfo " + isAuthenticated);

  return (
    <>
      {isAuthenticated && (
        <Group visibleFrom="sm">
          <Text>{`${user?.given_name} ${user?.family_name}`}</Text>
          <ActionIcon
            onClick={logout}
            variant="default"
            size="sm"
            aria-label="Logout"
          >
            <IconLogout />
          </ActionIcon>
        </Group>
      )}

      {!isAuthenticated && (
        <Group visibleFrom="sm">
          <Button variant="default" onClick={() => login()}>
            Log in
          </Button>
          <Button onClick={() => register()}>Sign up</Button>
        </Group>
      )}
    </>
  );
}
