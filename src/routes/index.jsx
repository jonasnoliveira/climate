import { BrowserRouter, Routes, Route } from "react-router-dom";
import Climate from "../pages";

export function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Climate />} />
        </Routes>
    </BrowserRouter>
  );
}