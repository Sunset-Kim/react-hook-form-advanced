import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import "@mantine/core/styles.css";
import { createTheme, MantineProvider, Text } from "@mantine/core";

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
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          <Text size="2xl">Home</Text>
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </MantineProvider>
  ),
});
