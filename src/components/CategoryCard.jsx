function CategoryCard({ category, setSelectedCategory }) {
  return (
    <div
      className="category-card"
      onClick={() => setSelectedCategory(category.name)}
    >
      <img
        src={category.image}
        alt={category.name}
        loading="lazy"
      />

      <h3>{category.name}</h3>
    </div>
  );
}

export default CategoryCard;