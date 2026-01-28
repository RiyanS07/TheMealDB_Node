import { useState } from "react";
import { api } from "../api";

export default function SearchBar({ onResults }) {
  const [query, setQuery] = useState("");

  const search = async () => {
    if (!query.trim()) return;
    const res = await api.get(`/search?name=${query}`);
    onResults(res.data.meals || []);
  };

  return (
    <div>
      <input
        placeholder="Search meals..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <button onClick={search}>Search</button>
    </div>
  );
}
