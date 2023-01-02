import { Route, Routes } from "react-router-dom";
import DetailsMap from "./Pages/Details/Details";
import { Home } from "./Pages/Home/Home";
import { NotFound } from "./Pages/notFound";

export const RouteMap = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/details/:id" element={<DetailsMap />} />
    </Routes>
  )
}
