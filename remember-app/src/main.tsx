import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Container, MantineProvider } from "@mantine/core";
import { theme } from "./theme/theme";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import { Router } from "./Router";

const { origin } = window?.location;

createRoot(document.getElementById("root") as HTMLElement).render(
  <MantineProvider theme={theme}>
    <Container>
      <StrictMode>
        <KindeProvider
          clientId={import.meta.env.VITE_KINDE_CLIENT_ID}
          domain={import.meta.env.VITE_KINDE_DOMAIN}
          redirectUri={origin}
          logoutUri={origin}
        >
          <Router />
        </KindeProvider>
      </StrictMode>
    </Container>
  </MantineProvider>
);
