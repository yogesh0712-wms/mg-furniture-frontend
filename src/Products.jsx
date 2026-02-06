import React from "react";
import { Star, Tag, ShoppingCart, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const Products = ({ products, title, subtitle, showAllLink }) => {
  return (
    <div>
      <section className="h-full">
        <div className="text-center">
          {title && (
            <p className=" text-5xl font-serif  font-extralight pt-28">
              {title}
            </p>
          )}
          {subtitle && <p className="text-lg pt-9">{subtitle}</p>}
          {showAllLink && (
            <p className="text-center font-poppins pt-10  text-xl">
              All Products
            </p>
          )}
        </div>
        <div className="w-[760px] lg:w-[80%] lg:mx-auto pt-10 pl-4 lg:flex lg:flex-wrap mb-20">
          {products.map((item, index) => (
            <div key={index} className="pt-10 lg:pr-10">
              <div className="border-2 border-l-0 h-72 lg:w-[76vh] overflow-hidden flex ">
                <div className="w-[50%] h-72 lg:w-[38vh] overflow-hidden">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-cover "
                  />
                  <h1>hii</h1>
                </div>
                <div className="w-[50%] lg:w-[38vh] justify-center items-center">
                  <p className="pt-10 pl-16 text-2xl font-serif">{item.type}</p>
                  <p className="pt-5 pl-10 text-lg">{item.Descrip}</p>

                  <div className="mt-11 ml-11">
                    {item.link && (
                      <Link
                        to={item.link}
                        className=" px-10 py-4 bg-white text-black border-2 border-black rounded-full text-lg font-semibold transition-all duration-300 hover:bg-black hover:text-white"
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
      <section className="grid grid-cols-2 lg:flex">
        <div className="border-2 border-r-0 w-96 h-48 flex gap-8">
          <div className="pt-10 pl-10  ">
            <Star size={40} strokeWidth={1.5} color="#D6D6B5" />
          </div>
          <div className="pt-10">
            <p className="pb-4 font-serif text-2xl">Good Quality</p>
            <p className="text-lg">
              Built with durable materials,
              <br /> focused on long-term use.
            </p>
          </div>
        </div>
        <div className="border-2 border-r-0 w-96 h-48 flex gap-8">
          <div className="pt-10 pl-10  ">
            <Tag size={40} strokeWidth={1.5} color="#D6D6B5" />
          </div>
          <div className="pt-10">
            <p className="pb-4 font-serif text-2xl">30% Off</p>
            <p className="text-lg">
              Project-based pricing,
              <br /> planned to stay efficient.
            </p>
          </div>
        </div>
        <div className="border-2 border-r-0 w-96 h-48 flex gap-8">
          <div className="pt-10 pl-10  ">
            <ShoppingCart size={40} strokeWidth={1.5} color="#D6D6B5" />
          </div>
          <div className="pt-10">
            <p className="pb-4 font-serif text-2xl">Easy Order</p>
            <p className="text-lg">
              Simple process from discussion,
              <br /> to final installation.
            </p>
          </div>
        </div>
        <div className="border-2 border-r-0 w-96 h-48 flex gap-8">
          <div className="pt-10 pl-10  ">
            <Lock size={40} strokeWidth={1.5} color="#D6D6B5" />
          </div>
          <div className="pt-10">
            <p className="pb-4 font-serif text-2xl">Secure Payments</p>
            <p className="text-lg">
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
