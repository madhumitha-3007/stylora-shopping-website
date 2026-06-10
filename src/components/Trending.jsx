function Trending({ setSelectedCategory }) {
  const trends = [
    {
      id: 1,
      title: "Men Wear",
      image:
        "https://louisphilippe.abfrl.in/blog/wp-content/uploads/2024/07/thumbnail-min.jpg",
    },
    {
      id: 2,
      title: "Women Wear",
      image:
        "https://assets.ajio.com/medias/sys_master/root/20241116/1AzY/6738c7d4c148fa1b30ce4231/-473Wx593H-700630746-red-MODEL.jpg",
    },
    {
      id: 3,
      title: "Kids Wear",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVNRBIk6yFdGwSxipoOps4X0cUaMdKhmas-Q&s",
    },
  ];

  return (
    <section className="trending">
      <h2>🔥 Trending Collections</h2>

      <div className="trending-grid">
        {trends.map((item) => (
          <div
            key={item.id}
            className="trend-card"
            onClick={() =>
              setSelectedCategory(item.title)
            }
          >
            <img
              src={item.image}
              alt={item.title}
            />

            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Trending;