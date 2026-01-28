import { Link } from "react-router-dom";

export default function MealCard({ meal }) {
  if (!meal) return null; //  PREVENT CRASH

  return (
    <Link to={`/meal/${meal.idMeal}`} className="card">
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <h3>{meal.strMeal}</h3>
    </Link>
  );
}
