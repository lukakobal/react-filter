import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const items = [
    "Apple",
    "Banana",
    "Orange",
    "Pineapple",
    "Mango",
    "Watermelon",
  ];

  const [search, setSearch] = useState("");

  const filteredItems = items.filter((item) =>
    item.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <div className="container">
      <h1>Filter List</h1>

      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
