import { Text } from "@mantine/core";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: () => (
    <div>
      <Text>React Hook Form 101</Text>
    </div>
  ),
});
