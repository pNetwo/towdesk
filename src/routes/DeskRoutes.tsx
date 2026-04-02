import { Route, Routes } from "react-router";
import { NotFound } from "../pages/NotFound";
import { TowDesk } from "../pages/TowDesk";
import { AppLayout } from "../components/AppLayout";

export function DeskRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout/>}>
        <Route path="/" element={<TowDesk />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
