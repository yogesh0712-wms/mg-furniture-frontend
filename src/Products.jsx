const ProductsQuality = () => {
  return (
    <div>
      <section className="grid grid-cols-1 gap-6 px-4 lg:flex lg:px-0">
        <div className="border-2 border-r-0 w-full lg:w-96 h-48 flex gap-6">
          <div className="pt-10 pl-6 lg:pl-10">
            <Star size={36} strokeWidth={1.5} color="#D6D6B5" />
          </div>
          <div className="pt-10">
            <p className="pb-4 font-serif text-xl lg:text-2xl">Good Quality</p>
            <p className="text-base lg:text-lg">
              Built with durable materials,
              <br /> focused on long-term use.
            </p>
          </div>
        </div>

        <div className="border-2 border-r-0 w-full lg:w-96 h-48 flex gap-6">
          <div className="pt-10 pl-6 lg:pl-10">
            <Tag size={36} strokeWidth={1.5} color="#D6D6B5" />
          </div>
          <div className="pt-10">
            <p className="pb-4 font-serif text-xl lg:text-2xl">30% Off</p>
            <p className="text-base lg:text-lg">
              Project-based pricing,
              <br /> planned to stay efficient.
            </p>
          </div>
        </div>

        <div className="border-2 border-r-0 w-full lg:w-96 h-48 flex gap-6">
          <div className="pt-10 pl-6 lg:pl-10">
            <ShoppingCart size={36} strokeWidth={1.5} color="#D6D6B5" />
          </div>
          <div className="pt-10">
            <p className="pb-4 font-serif text-xl lg:text-2xl">Easy Order</p>
            <p className="text-base lg:text-lg">
              Simple process from discussion,
              <br /> to final installation.
            </p>
          </div>
        </div>

        <div className="border-2 border-r-0 w-full lg:w-96 h-48 flex gap-6">
          <div className="pt-10 pl-6 lg:pl-10">
            <Lock size={36} strokeWidth={1.5} color="#D6D6B5" />
          </div>
          <div className="pt-10">
            <p className="pb-4 font-serif text-xl lg:text-2xl">
              Secure Payments
            </p>
            <p className="text-base lg:text-lg">
              Reliable payment process,
              <br /> with clear documentation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export { ProductsQuality };
export default Products;
