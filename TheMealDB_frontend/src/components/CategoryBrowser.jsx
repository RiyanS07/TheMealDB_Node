import { useEffect, useState } from "react";
import { api } from "../api";

export default function CategoryBrowser({ onResults }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    api.get("/categories").then(res =>
      setCategories(res.data.categories)
    );
  }, []);

  const selectCategory = async (name) => {
    const res = await api.get(`/category/${name}`);
    onResults(res.data.meals || []);
  };

  return (
    <div className="categories">
      {categories.map(c => (
        <button
          key={c.idCategory}
          onClick={() => selectCategory(c.strCategory)}
        >
          {c.strCategory}
        </button>
      ))}
    </div>
  );
}
