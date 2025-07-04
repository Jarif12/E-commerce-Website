import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { products as data } from "../assets/products";
import ProductCard from "../components/ProductCard";
import ProductFilter from "../components/ProductFilter";

export default function Home() {
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("default");
  const navigate = useNavigate();

  const filtered = data
    .filter(p =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "low") return a.price - b.price;
      if (sortOrder === "high") return b.price - a.price;
      return 0;
    });

  useEffect(() => {
    if (search.trim() && filtered.length === 0) {
      navigate("/notfound");
    }
  }, [search, filtered, navigate]);

  return (
    <div className="home">
      <div className="filter-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
        <ProductFilter sortOrder={sortOrder} setSortOrder={setSortOrder} />
      </div>

      <div className="product-grid">
        {filtered.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
