import mainCategories from "../data/categoryData";
import CategoryCard from "./CategoryCard";

function CategoryGrid({ setSelectedCategory }) {
  return (
    <div className="category-grid">
      {mainCategories.map((category) => (
        <CategoryCard
          key={category.id}
          category={category}
          setSelectedCategory={setSelectedCategory}
        />
      ))}
    </div>
  );
}

export default CategoryGrid;