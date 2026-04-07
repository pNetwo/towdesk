import { BrowserRouter } from "react-router";
import { AuthRoutes } from "./AuthRoutes";
import { DeskRoutes } from "./DeskRoutes";
import { ManagerRoutes } from "./ManagerRoutes";

export function Routes() {
  return (
    <BrowserRouter>
      <ManagerRoutes />
    </BrowserRouter>
  );
}
