import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Container, MantineProvider } from "@mantine/core";
import { theme } from "./theme/theme";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import { Router } from "./Router";

createRoot(document.getElementById("root") as HTMLElement).render(
  <MantineProvider theme={theme}>
    <KindeProvider
      clientId="1d5ca67b5be54e758b33e9e78e327991"
      domain="https://agostinho.kinde.com"
      redirectUri="http://localhost:5173"
      logoutUri="http://localhost:5173"
    >
      <Container>
        <StrictMode>
          <Router />
        </StrictMode>
      </Container>
    </KindeProvider>
  </MantineProvider>
);
