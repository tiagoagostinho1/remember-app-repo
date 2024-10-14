import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Container, MantineProvider } from "@mantine/core";
import { theme } from "./theme/theme.js";

import App from "./App.js";

createRoot(document.getElementById("root") as HTMLElement).render(
  <MantineProvider theme={theme}>
    <Container>
      <StrictMode>
        <App />
      </StrictMode>
    </Container>
  </MantineProvider>
);
