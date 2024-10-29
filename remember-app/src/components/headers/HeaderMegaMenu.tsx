import {
  Group,
  Button,
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
  Text,
  ActionIcon,
} from "@mantine/core";

import { useDisclosure } from "@mantine/hooks";
import classes from "./HeaderMegaMenu.module.css";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { IconLogout } from "@tabler/icons-react";

export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const { login, register, isAuthenticated, user, logout } = useKindeAuth();

  return (
    <Box>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <link rel="icon" type="image/svg+xml" href="/memoir-logo.svg" />
          <Group h="100%" gap={0} visibleFrom="sm">
            <a href="/" className={classes.link}>
              Home
            </a>
            <a href="/remember" className={classes.link}>
              Remember
            </a>
          </Group>

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

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />
          <a href="/" className={classes.link}>
            Home
          </a>
          <a href="/remember" className={classes.link}>
            Remember
          </a>
          <Divider my="sm" />
          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default" onClick={() => login()}>
              Log in
            </Button>
            <Button onClick={() => register()}>Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
