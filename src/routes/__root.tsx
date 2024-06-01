import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import { AppShell, Burger, createTheme, MantineProvider } from "@mantine/core";

import "@mantine/core/styles.css";
import { useDisclosure } from "@mantine/hooks";
import { NavBar } from "../shared/components";

const theme = createTheme({
  defaultRadius: "md",
  fontSizes: {
    "2xs": "0.625rem",
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
  },
});

export const Route = createRootRoute({
  component: () => (
    <MantineProvider theme={theme}>
      <App />
      <TanStackRouterDevtools />
    </MantineProvider>
  ),
});

const App = () => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <div>Logo</div>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <NavBar />
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};
