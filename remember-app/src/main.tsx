import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Container, MantineProvider } from "@mantine/core";
import { theme } from "./theme/theme";

import { App } from "./App";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root") as HTMLElement).render(
  <MantineProvider theme={theme}>
    <Container>
      <StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StrictMode>
    </Container>
  </MantineProvider>
);
