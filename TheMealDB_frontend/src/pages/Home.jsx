import { useState } from "react";
import { api } from "../api";
import SearchBar from "../components/SearchBar";
import CategoryBrowser from "../components/CategoryBrowser";
import MealCard from "../components/MealCard";

export default function Home() {
  const [meals, setMeals] = useState([]);

  const randomMeal = async () => {
    const res = await api.get("/random");
    setMeals(res.data.meals);
  };

  return (
    <>
      <SearchBar onResults={setMeals} />
      <CategoryBrowser onResults={setMeals} />

      <button onClick={randomMeal}>🍔 I'm Feeling Hungry</button>

      <div className="grid">
        {Array.isArray(meals) &&
          meals
          .filter(Boolean) //  removes null / undefined
          .map(m => (
            <MealCard key={m.idMeal} meal={m} />
      ))}
</div>
    </>
  );
}
