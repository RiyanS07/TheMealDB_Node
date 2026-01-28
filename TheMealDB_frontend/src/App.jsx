import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MealDetails from "./pages/MealDetails";

export default function App() {
  return (
    <div className="container">
      <h1>TheMealDB Explorer</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meal/:id" element={<MealDetails />} />
      </Routes>
    </div>
  );
}
