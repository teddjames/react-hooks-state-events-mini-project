import React, { useState } from "react";

function CategoryFilter({ categories, onSelectCategory }) {
  const [selected, setSelected] = useState("All");

  function handleClick(cat) {
    setSelected(cat);
    onSelectCategory(cat);
  }

  return (
    <div className="category-filter">
      {categories.map((cat) => (
        <button
          key={cat}
          className={cat === selected ? "selected" : ""}
          onClick={() => handleClick(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
