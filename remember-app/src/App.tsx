import { AppShell } from "@mantine/core";
import { Router } from "./Router";
import { Header } from "./components/Header";
import "./App.module.css";
import { Outlet } from "react-router-dom";

export function App() {
  return (
    <>
      <AppShell>
        <Header />
        <AppShell.Main>
          <Outlet />
        </AppShell.Main>
      </AppShell>
    </>
  );
}
