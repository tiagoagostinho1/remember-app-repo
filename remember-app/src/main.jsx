import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Container, MantineProvider } from "@mantine/core";
import { theme } from "./theme/theme.js";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <MantineProvider theme={theme}>
    <Container>
      <StrictMode>
        <App />
      </StrictMode>
    </Container>
  </MantineProvider>
);
