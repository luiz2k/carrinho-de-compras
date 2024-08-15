import { getAllProducts } from "./services";
import { ProductCard } from "./components/ProductCard";

export async function HomePage() {
  const products = await getAllProducts();

  return (
    <section className="flex flex-wrap justify-center gap-2.5">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          image={product.images[0]}
          price={product.price}
        />
      ))}
    </section>
  );
}
