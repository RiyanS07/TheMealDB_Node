import express from "express";
import { cache } from "../cache/cache.js";
import { fetchFromMealDB } from "../services/themealdb.service.js";

const router = express.Router();

const cached = async (key, fetchFn) => {
  if (cache.has(key)) return cache.get(key);
  const data = await fetchFn();
  cache.set(key, data);
  return data;
};

router.get("/search", async (req, res) => {
  const { name } = req.query;
  const data = await cached(`search_${name}`, () =>
    fetchFromMealDB(`/search.php?s=${name}`)
  );
  res.json(data);
});

router.get("/categories", async (_, res) => {
  const data = await cached("categories", () =>
    fetchFromMealDB("/categories.php")
  );
  res.json(data);
});

router.get("/category/:name", async (req, res) => {
  const data = await cached(`category_${req.params.name}`, () =>
    fetchFromMealDB(`/filter.php?c=${req.params.name}`)
  );
  res.json(data);
});

router.get("/random", async (_, res) => {
  const data = await fetchFromMealDB("/random.php");
  res.json(data);
});

router.get("/:id", async (req, res) => {
  const data = await cached(`meal_${req.params.id}`, () =>
    fetchFromMealDB(`/lookup.php?i=${req.params.id}`)
  );
  res.json(data);
});

export default router;
