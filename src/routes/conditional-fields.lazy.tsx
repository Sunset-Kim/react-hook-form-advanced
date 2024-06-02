import { createLazyFileRoute } from "@tanstack/react-router";
import { ConditionalFieldsPage } from "../pages/conditional-fields.page";

export const Route = createLazyFileRoute("/conditional-fields")({
  component: () => <ConditionalFieldsPage />,
});
