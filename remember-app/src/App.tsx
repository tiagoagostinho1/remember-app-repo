import { AppShell } from "@mantine/core";
import { Router } from "./Router";
import { Header } from "./components/Header";
import "./App.module.css";

export function App() {
  return (
    <AppShell>
      <Header />
      <AppShell.Main>
        <Router />
      </AppShell.Main>
    </AppShell>
  );
}
