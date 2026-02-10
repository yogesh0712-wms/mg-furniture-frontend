import React from "react";
import { Star, Tag, ShoppingCart, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const Products = ({ products, title, subtitle, showAllLink }) => {
  return (
    <div>
      <section className="h-full">
        <div className="text-center px-4">
          {title && (
            <p className="text-3xl lg:text-5xl font-serif font-extralight pt-16 lg:pt-28">
              {title}
            </p>
          )}
          {subtitle && (
            <p className="text-base lg:text-lg pt-6 lg:pt-9">{subtitle}</p>
          )}
          {showAllLink && (
            <p className="font-poppins pt-6 lg:pt-10 text-lg lg:text-xl">
              All Products
            </p>
          )}
        </div>

        <div
          className="
            w-full px-4 pt-10
            lg:w-[80%] lg:mx-auto lg:flex lg:flex-wrap
            mb-20
          "
        >
          {products.map((item, index) => (
            <div key={index} className="pt-10 w-full lg:pr-10 lg:w-auto">
              <div
                className="
                  border-2 border-l-0
                  flex flex-col
                  lg:flex-row
                  h-auto lg:h-72 lg:w-[76vh]
                  overflow-hidden
                "
              >
                {/* Image */}
                <div className="w-full h-56 lg:w-[38vh] lg:h-72 overflow-hidden">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text */}
                <div className="w-full lg:w-[38vh] px-6 py-6 lg:px-0 lg:py-0">
                  <p className="pt-0 lg:pt-10 lg:pl-16 text-xl lg:text-2xl font-serif">
                    {item.type}
                  </p>
                  <p className="pt-3 lg:pt-5 lg:pl-10 text-base lg:text-lg">
                    {item.Descrip}
                  </p>

                  <div className="mt-6 lg:mt-11 lg:ml-11">
                    {item.link && (
                      <Link
                        to={item.link}
                        className="
                          inline-block
                          px-8 py-3
                          lg:px-10 lg:py-4
                          bg-white text-black border-2 border-black
                          rounded-full
                          text-base lg:text-lg
                          font-semibold
                          transition-all duration-300
                          hover:bg-black hover:text-white
                        "
                      >
                        Check Out
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

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
