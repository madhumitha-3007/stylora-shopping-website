import menProducts from "../data/menData";
import womenProducts from "../data/womenData";

function FeaturedProducts() {
  const featured = [
    ...menProducts.slice(0, 3),
    ...womenProducts.slice(0, 3),
  ];

  return (
    <section className="featured">
      <h2>✨ Featured Products</h2>

      <div className="featured-grid">
        {featured.map((product) => (
          <div
            key={product.id}
            className="featured-card"
          >
            <img
              src={product.image}
              alt={product.name}
            />

            <h4>{product.name}</h4>

            <p>₹{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;