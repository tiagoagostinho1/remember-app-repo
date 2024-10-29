import {
  Group,
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
} from "@mantine/core";

import { useDisclosure } from "@mantine/hooks";
import classes from "./HeaderMegaMenu.module.css";

import { UserInfo } from "./UserInfo";

export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

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

          <UserInfo />

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
          <UserInfo />
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
