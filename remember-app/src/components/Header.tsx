import { AppShell } from "@mantine/core";
import { HeaderMegaMenu } from "./headers/HeaderMegaMenu";

export function Header() {
  return (
    <AppShell.Header>
      <HeaderMegaMenu />
    </AppShell.Header>
  );
}
