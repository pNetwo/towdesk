import { Route, Routes } from "react-router";
import { NotFound } from "../pages/NotFound";
import { AppLayout } from "../components/AppLayout";
import { WorkOrder } from "../pages/WorkOrders";

export function DeskRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout/>}>
        <Route path="/" element={<WorkOrder />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
