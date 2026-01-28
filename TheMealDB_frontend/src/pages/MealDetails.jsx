import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../api";

export default function MealDetails() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    api.get(`/${id}`).then(res =>
      setMeal(res.data.meals[0])
    );
  }, [id]);

  if (!meal) return <p>Loading...</p>;

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && ingredient.trim()) {
      ingredients.push(`${ingredient} - ${measure}`);
    }
  }

  return (
    <div className="details">
      <h2>{meal.strMeal}</h2>
      <img src={meal.strMealThumb} alt={meal.strMeal} />

      <h3>Ingredients</h3>
      <ul>
        {ingredients.map((i, idx) => <li key={idx}>{i}</li>)}
      </ul>

      <h3>Instructions</h3>
      <p>{meal.strInstructions}</p>

      {meal.strYoutube && (
        <iframe
          title="video"
          width="100%"
          height="400"
          src={`https://www.youtube.com/embed/${meal.strYoutube.split("v=")[1]}`}
        />
      )}
    </div>
  );
}
