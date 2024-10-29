import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Container, MantineProvider } from "@mantine/core";
import { theme } from "./theme/theme";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import { Router } from "./Router";

const { origin } = window?.location;

createRoot(document.getElementById("root") as HTMLElement).render(
  <KindeProvider
    clientId="1d5ca67b5be54e758b33e9e78e327991"
    domain="https://agostinho.kinde.com"
    redirectUri={origin}
    logoutUri={origin}
  >
    <MantineProvider theme={theme}>
      <Container>
        <StrictMode>
          <Router />
        </StrictMode>
      </Container>
    </MantineProvider>
  </KindeProvider>
);
