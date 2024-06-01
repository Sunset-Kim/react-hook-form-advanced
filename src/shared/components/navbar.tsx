import { Stack } from "@mantine/core";
import { Link } from "@tanstack/react-router";

export const NavBar = () => {
  return (
    <Stack>
      <Link to="/">Home</Link>
      <Link to="/dynamic-fields">Dynamic Fields</Link>
    </Stack>
  );
};
