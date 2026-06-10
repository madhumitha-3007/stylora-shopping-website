import ProductCard from "./ProductCard";

import menProducts from "../data/menData";
import womenProducts from "../data/womenData";
import kidsProducts from "../data/kidsData";
import bags from "../data/bagsData";
import accessories from "../data/accessoriesData";

function ProductGrid({ selectedCategory, searchTerm }) {
  let products = [];

  if (selectedCategory === "Men Wear") {
    products = menProducts;
  } else if (selectedCategory === "Women Wear") {
    products = womenProducts;
  } else if (selectedCategory === "Kids Wear") {
    products = kidsProducts;
  } else if (selectedCategory === "Bags") {
    products = bags;
  } else if (selectedCategory === "Accessories") {
    products = accessories;
  }

  const filteredProducts = products.filter((product) =>
    product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-grid">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))
      ) : (
        <h2
          style={{
            textAlign: "center",
            width: "100%",
            marginTop: "40px",
          }}
        >
          No products found
        </h2>
      )}
    </div>
  );
}

export default ProductGrid;