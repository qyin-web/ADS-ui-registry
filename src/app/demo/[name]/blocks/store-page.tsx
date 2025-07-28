import ProductGrid from "@/components/product-grid";
import { getCategories, getProducts } from "@/lib/products";

export default async function StorePage() {
  const products = await getProducts();
  const categories = await getCategories();

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="py-12">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="font-bold text-3xl tracking-tighter sm:text-4xl md:text-5xl text-[#172B4D]">
                  Confluence Templates
                </h1>

                <p className="mx-auto max-w-[700px] text-[#6B778C] md:text-xl">
                  Browse and use our collection of Confluence templates and components to build your workspace faster.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-12">
          <div className="container px-4 md:px-6">
            <ProductGrid products={products} categories={categories} />
          </div>
        </section>
      </main>
    </div>
  );
}
