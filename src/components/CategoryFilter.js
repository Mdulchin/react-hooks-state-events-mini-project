import React from "react";

function CategoryFilter({categories, selectedCategory, setSelectedCategory}) {
  const categoryButton = categories.map(cat => {
 
  return <button className={cat === selectedCategory ? "selected" : null} key={cat} onClick={() => setSelectedCategory(cat)}>{cat}</button>
  })
  
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
     {categoryButton}
    </div>
  );
}

export default CategoryFilter;
