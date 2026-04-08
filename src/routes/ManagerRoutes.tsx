import { Route, Routes } from "react-router";

import { AppLayout } from "../components/AppLayout";

import { Dashboard } from "../components/Dashboard";
import { NotFound } from "../pages/NotFound";
import { WorkOrder } from "../pages/WorkOrders";

export function ManagerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/services/:id" element={<WorkOrder />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
