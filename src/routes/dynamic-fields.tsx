import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dynamic-fields")({
  component: () => <div>Hello /dynamic-fields!</div>,
});
