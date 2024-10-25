import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Container, MantineProvider } from "@mantine/core";
import { theme } from "./theme/theme";

import { App } from "./App";
import { Router } from "./Router";

createRoot(document.getElementById("root") as HTMLElement).render(
  <MantineProvider theme={theme}>
    <Container>
      <StrictMode>
        <Router />
      </StrictMode>
    </Container>
  </MantineProvider>
);
