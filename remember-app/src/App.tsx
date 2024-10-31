import { AppShell } from "@mantine/core";
import { Header } from "./components/Header";
import { Outlet } from "react-router-dom";
import "./App.module.css";

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
