import { BrowserRouter } from "react-router";
import { AuthRoutes } from "./AuthRoutes";
import { DeskRoutes } from "./DeskRoutes";

export function Routes() {
  return (
    <BrowserRouter>
      <DeskRoutes />
    </BrowserRouter>
  );
}
